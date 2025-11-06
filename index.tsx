import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Check if environment is properly configured
const isConfigured = Boolean(Deno.env.get("SUPABASE_URL") && Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"));

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a628c144/health", (c) => {
  return c.json({ 
    status: "ok",
    configured: isConfigured,
    message: isConfigured ? "Server is ready" : "Server running but database not configured"
  });
});

// Get Samuel's calendar availability
app.get("/make-server-a628c144/calendar/availability", async (c) => {
  if (!isConfigured) {
    return c.json({ error: 'Database not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.' }, 503);
  }
  
  try {
    const { date } = c.req.query();
    
    // Get existing bookings for the date
    const bookingsKey = date ? `bookings:${date}` : 'bookings:*';
    const existingBookings = date 
      ? await kv.get(bookingsKey) || []
      : await kv.getByPrefix('bookings:');
    
    // Generate available time slots (9 AM - 5 PM, 1-hour slots)
    const availableSlots = [];
    const bookedTimes = Array.isArray(existingBookings) ? existingBookings : [];
    
    for (let hour = 9; hour < 17; hour++) {
      const timeSlot = `${hour.toString().padStart(2, '0')}:00`;
      const isBooked = bookedTimes.some((booking: any) => booking.time === timeSlot);
      
      if (!isBooked) {
        availableSlots.push({
          time: timeSlot,
          available: true
        });
      }
    }
    
    return c.json({ availableSlots, date: date || 'all' });
  } catch (error) {
    console.error('Error fetching calendar availability:', error);
    return c.json({ error: 'Failed to fetch availability', details: error.message }, 500);
  }
});

// Create a booking/appointment
app.post("/make-server-a628c144/bookings", async (c) => {
  if (!isConfigured) {
    return c.json({ error: 'Database not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.' }, 503);
  }
  
  try {
    const body = await c.req.json();
    const { date, time, name, email, phone, message, bookingData } = body;
    
    if (!date || !time || !name || !email) {
      return c.json({ error: 'Missing required fields: date, time, name, email' }, 400);
    }
    
    // Check if slot is still available
    const bookingsKey = `bookings:${date}`;
    const existingBookings = await kv.get(bookingsKey) || [];
    const isBooked = existingBookings.some((booking: any) => booking.time === time);
    
    if (isBooked) {
      return c.json({ error: 'Time slot is no longer available' }, 409);
    }
    
    // Create booking
    const booking = {
      id: `booking_${Date.now()}`,
      date,
      time,
      name,
      email,
      phone,
      message,
      bookingData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    // Store booking
    const updatedBookings = [...existingBookings, booking];
    await kv.set(bookingsKey, updatedBookings);
    
    // Also store by booking ID for easy retrieval
    await kv.set(`booking:${booking.id}`, booking);
    
    console.log('Booking created successfully:', booking.id);
    return c.json({ success: true, booking }, 201);
  } catch (error) {
    console.error('Error creating booking:', error);
    return c.json({ error: 'Failed to create booking', details: error.message }, 500);
  }
});

// Get booking by ID
app.get("/make-server-a628c144/bookings/:id", async (c) => {
  if (!isConfigured) {
    return c.json({ error: 'Database not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.' }, 503);
  }
  
  try {
    const { id } = c.req.param();
    const booking = await kv.get(`booking:${id}`);
    
    if (!booking) {
      return c.json({ error: 'Booking not found' }, 404);
    }
    
    return c.json({ booking });
  } catch (error) {
    console.error('Error fetching booking:', error);
    return c.json({ error: 'Failed to fetch booking', details: error.message }, 500);
  }
});

// Process payment
app.post("/make-server-a628c144/payments", async (c) => {
  if (!isConfigured) {
    return c.json({ error: 'Database not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.' }, 503);
  }
  
  try {
    const body = await c.req.json();
    const { bookingId, amount, paymentMethod, paymentDetails } = body;
    
    if (!bookingId || !amount || !paymentMethod) {
      return c.json({ error: 'Missing required fields: bookingId, amount, paymentMethod' }, 400);
    }
    
    // Get booking
    const booking = await kv.get(`booking:${bookingId}`);
    if (!booking) {
      return c.json({ error: 'Booking not found' }, 404);
    }
    
    // In a real application, this would integrate with actual payment processors
    // For prototype purposes, we'll simulate payment processing
    const payment = {
      id: `payment_${Date.now()}`,
      bookingId,
      amount,
      paymentMethod,
      status: 'completed', // In real app: 'pending', 'processing', 'completed', 'failed'
      transactionId: `txn_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    
    // Store payment
    await kv.set(`payment:${payment.id}`, payment);
    
    // Update booking status
    booking.status = 'confirmed';
    booking.paymentId = payment.id;
    await kv.set(`booking:${bookingId}`, booking);
    
    // Update the bookings list
    const bookingsKey = `bookings:${booking.date}`;
    const bookings = await kv.get(bookingsKey) || [];
    const updatedBookings = bookings.map((b: any) => 
      b.id === bookingId ? booking : b
    );
    await kv.set(bookingsKey, updatedBookings);
    
    console.log('Payment processed successfully:', payment.id);
    return c.json({ success: true, payment, booking }, 200);
  } catch (error) {
    console.error('Error processing payment:', error);
    return c.json({ error: 'Failed to process payment', details: error.message }, 500);
  }
});

// Get payment by ID
app.get("/make-server-a628c144/payments/:id", async (c) => {
  if (!isConfigured) {
    return c.json({ error: 'Database not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.' }, 503);
  }
  
  try {
    const { id } = c.req.param();
    const payment = await kv.get(`payment:${id}`);
    
    if (!payment) {
      return c.json({ error: 'Payment not found' }, 404);
    }
    
    return c.json({ payment });
  } catch (error) {
    console.error('Error fetching payment:', error);
    return c.json({ error: 'Failed to fetch payment', details: error.message }, 500);
  }
});

Deno.serve(app.fetch);