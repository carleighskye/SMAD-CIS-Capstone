# Grant Expedition Booking System

## Overview
A complete booking and scheduling system for Grant Expedition's Tanzanian adventure tours, featuring calendar scheduling with Samuel and secure payment processing.

## Features Implemented

### 1. Calendar Scheduling Tool
- **Interactive Calendar**: Select from available dates up to 30 days in advance
- **Time Slot Selection**: View and book available 1-hour time slots (9 AM - 5 PM)
- **Real-time Availability**: Automatically updates based on existing bookings
- **Meeting Details**: Capture client information for personalized consultations

**Route**: `/book` (includes calendar scheduling in the flow)

### 2. Secure Payment Gateway
Multiple payment methods supported:
- **Credit/Debit Cards**: Secure card processing with validation
- **PayPal**: Email-based PayPal payments
- **Mobile Money**: Support for M-Pesa, Tigo Pesa, Airtel Money, Halo Pesa
- **Bank Transfer**: Direct bank account transfers

**Features**:
- Real-time payment validation
- Secure transaction processing
- Payment confirmation and receipt generation
- Transaction ID tracking

### 3. Complete Booking Flow
Five-step booking process:
1. **Choose Experience**: Select from curated tour packages
2. **Travel Details**: Specify number of travelers and preferred dates
3. **Schedule Meeting**: Book a consultation with Samuel
4. **Payment**: Complete secure payment
5. **Confirmation**: Receive booking confirmation with all details

**Route**: `/book`

### 4. Admin Dashboard
Monitor and manage bookings:
- View all bookings by date
- Real-time calendar availability
- Revenue and booking statistics
- Client management

**Route**: `/admin`

## Backend API Endpoints

All endpoints are prefixed with `/make-server-a628c144/`

### Calendar & Availability
```
GET /calendar/availability?date=YYYY-MM-DD
```
Returns available time slots for a specific date.

### Bookings
```
POST /bookings
Body: {
  date, time, name, email, phone, message, bookingData
}
```
Creates a new booking and reserves the time slot.

```
GET /bookings/:id
```
Retrieves booking details by ID.

### Payments
```
POST /payments
Body: {
  bookingId, amount, paymentMethod, paymentDetails
}
```
Processes payment and updates booking status to confirmed.

```
GET /payments/:id
```
Retrieves payment details by ID.

## Data Storage

All data is stored in Supabase using the key-value store:

- `bookings:{date}` - Array of bookings for a specific date
- `booking:{id}` - Individual booking details
- `payment:{id}` - Individual payment transaction details

## User Flow

1. **Customer** visits `/booking` to learn about the booking process
2. **Customer** clicks "Get Started" or "Book Now" to begin at `/book`
3. **Customer** selects their preferred tour experience
4. **Customer** enters travel party details
5. **Customer** schedules a virtual meeting with Samuel by selecting date and time
6. **Customer** enters contact information
7. **Customer** proceeds to payment and selects payment method
8. **Customer** completes payment securely
9. **Customer** receives confirmation with booking and transaction details
10. **Samuel** receives booking notification and can view in admin dashboard at `/admin`

## Security Notes

⚠️ **Important**: This is a prototype system. For production use:

1. **PII Protection**: Never store sensitive personal information without proper encryption
2. **Payment Processing**: Integrate with certified payment processors (Stripe, PayPal API, etc.)
3. **PCI Compliance**: Never store full credit card details
4. **Calendar Integration**: Connect to actual calendar services (Google Calendar, Calendly, etc.)
5. **Email Notifications**: Integrate with email service (SendGrid, AWS SES, etc.)
6. **Authentication**: Add proper admin authentication for the dashboard

## Testing the System

### Test Booking Flow:
1. Navigate to `/book`
2. Select "Serengeti Safari Adventure"
3. Set travelers to 2
4. Select a date and time slot
5. Fill in contact information
6. Choose a payment method and complete payment
7. View confirmation details

### View Admin Dashboard:
1. Navigate to `/admin`
2. View booking statistics and calendar
3. Select different dates to see availability

## Integration Points

### Calendar Sync
To sync with Samuel's actual calendar:
- Integrate with Google Calendar API
- Use Calendly webhook integration
- Connect to Microsoft Outlook Calendar

### Payment Processing
To process real payments:
- Stripe: `stripe.com/docs`
- PayPal: `developer.paypal.com`
- M-Pesa API: Tanzania mobile money integration
- Bank Transfer: Integration with banking APIs

### Email Notifications
To send confirmation emails:
- SendGrid API
- AWS SES
- Supabase Auth email templates

## Routes Summary

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/booking` - Booking information page
- `/book` - Complete booking flow (5 steps)
- `/admin` - Admin dashboard for managing bookings

## Technologies Used

- React + TypeScript
- React Router for navigation
- Supabase (Backend + Database)
- Hono (Server framework)
- Tailwind CSS for styling
- Lucide React for icons

## Development Notes

The system is fully functional for prototyping and demonstrations. All booking data persists in the Supabase key-value store and can be retrieved across sessions.
