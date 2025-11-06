# Grant Expedition Website - Complete Testing Guide

## Overview

This guide will walk you through testing all features of the Grant Expedition travel booking website, including navigation, booking flow, and backend integration.

---

## 🏠 Navigation Testing

### Test All Pages

1. **Home Page** - Visit `/` or click the logo
   - ✅ Should display the main landing page
   - ✅ Click "Book Now" button → should navigate to `/book`
   - ✅ Click navigation menu items (Home, About, Tours, Contact)

2. **About Page** - Visit `/about`
   - ✅ Should display company information
   - ✅ Navigation header should be functional
   - ✅ "Book Now" button should work

3. **Tours Page** - Visit `/tours`
   - ✅ Should display 8 tour cards with "Taste of Tanzania"
   - ✅ Each "Book Now" button should navigate to `/book`
   - ✅ "Learn More" buttons should be clickable

4. **Contact Page** - Visit `/contact`
   - ✅ Should display contact form
   - ✅ Navigation should work
   - ✅ "Book Now" button should function

---

## 📝 Complete Booking Flow Testing

### **Step 1: Choose Your Experience**

1. Navigate to `/book`
2. You should see 4 tour options:
   - Serengeti Safari Adventure ($2,500)
   - Mount Kilimanjaro Trek ($3,200)
   - Zanzibar Beach & Culture ($1,800)
   - Custom Tanzania Tour (Custom pricing)
3. ✅ **Action**: Click on "Serengeti Safari Adventure"
4. ✅ Verify the card highlights when selected
5. ✅ Click "Next" button

### **Step 2: Travel Details**

1. You should see:
   - Number of travelers (with +/- buttons)
   - Preferred travel month (dropdown)
2. ✅ **Action**:
   - Click "+" to increase travelers to 2
   - Select "June 2025" from dropdown
3. ✅ Click "Next"

### **Step 3: Submit Inquiry/Message (Optional)**

1. You should see a form with:
   - Name field
   - Email field
   - Website field (optional)
   - Message textarea
2. ✅ **Option A - Submit Inquiry**:
   - Fill in: Name "John Doe"
   - Email: "john@example.com"
   - Message: "I have dietary restrictions"
   - Click "Submit" button
3. ✅ **Option B - Skip**:
   - Click "Skip" button to bypass this step

### **Step 4: Personal Information (Required)**

1. You should see required fields:
   - Full Name (required)
   - Email Address (required)
   - Website (optional)
   - Additional Notes
2. ✅ **Action**:
   - Enter Name: "Jane Smith"
   - Enter Email: "jane@example.com"
   - Additional Notes: "Honeymoon trip"
3. ✅ Try clicking "Next" without filling required fields → should show alert
4. ✅ Fill all required fields and click "Next"

### **Step 5: Review Your Booking**

1. You should see a complete summary showing:
   - **Tour Selection**: Experience, travelers, preferred month
   - **Personal Information**: Name, email, website, notes
   - **Inquiry Details** (if you submitted one in Step 3)
2. ✅ **Verify all information is correct**
3. ✅ Click "Back" to test backward navigation
4. ✅ Click "Continue to Schedule Meeting"

### **Step 6: Schedule Meeting with Samuel**

1. You should see:
   - Interactive calendar for next 30 days
   - Time slot selection (9 AM - 5 PM, hourly slots)
   - Contact information fields
2. ✅ **Action**:
   - Click on tomorrow's date
   - Select "10:00 AM" time slot
   - Verify your name and email are pre-filled
   - Add phone number: "+1 555-0123"
   - Optional message: "Looking forward to discussing the safari"
3. ✅ Click "Confirm Booking"
4. ✅ **Backend Test**: This should create a booking record in Supabase

### **Step 7: Secure Payment**

1. You should see payment options:
   - Credit/Debit Card
   - PayPal
   - Mobile Money (M-Pesa, Tigo Pesa, Airtel Money, Halo Pesa)
   - Bank Transfer
2. ✅ **Test Credit Card**:
   - Select "Credit/Debit Card"
   - Card Number: `1234 5678 9012 3456`
   - Expiry: `12/25`
   - CVV: `123`
   - Cardholder: "Jane Smith"
3. ✅ Click "Complete Payment"
4. ✅ **Backend Test**: This should process payment and update booking status

### **Step 8: Loading Screen**

1. ✅ After clicking "Complete Payment", you should see:
   - The loading screen with animated spinner
   - "Submitting..." text
   - Grant Expedition header
2. ✅ Wait 2 seconds for automatic progression

### **Step 9: Confirmation**

1. You should see:
   - Green checkmark icon
   - "Booking Confirmed!" message
   - Email confirmation notice
   - "Check Your Email" section with gray background
   - Complete booking summary with:
     - Experience
     - Travelers
     - Preferred Month
     - Meeting Date & Time
     - Booking ID
     - Transaction ID
     - Contact Email
     - Amount Paid ($2,500)
   - Special Requests section (if you added notes)
   - "What's Next?" section with next steps
2. ✅ Click "Return to Home" → should navigate to `/`

---

## 🔧 Admin Dashboard Testing

### Access Admin Panel

1. Navigate to `/admin`
2. You should see:
   - Total bookings count
   - Revenue total
   - Upcoming meetings list
   - Bookings table with all details
   - Calendar availability management

### Test Booking Management

1. ✅ Complete a booking using the flow above
2. ✅ Navigate to `/admin`
3. ✅ Verify your new booking appears in:
   - Total bookings count
   - Revenue total (should increase)
   - Upcoming meetings section
   - Bookings table
4. ✅ Check booking details match what you entered

### Test Calendar Management

1. ✅ Scroll to "Calendar Availability Management"
2. ✅ Click on a date
3. ✅ Try blocking a time slot
4. ✅ Return to `/book` and verify that slot is unavailable

---

## 🎨 Design & UX Testing

### Visual Consistency

- ✅ All pages use consistent color scheme:
  - Primary: #181e4b (dark blue)
  - Accent: #fee373 (yellow)
  - Secondary: #97756e (brown)
- ✅ Typography is consistent (Volkhov, Inter, Plus Jakarta Sans, Instrument Sans)
- ✅ "Book Now" buttons are highlighted in yellow (#fee373)

### Responsive Design

1. ✅ Test on desktop (1200px+)
2. ✅ Test on tablet (768px - 1199px)
3. ✅ Test on mobile (< 768px)

### Interactive Elements

- ✅ All buttons should show hover effects
- ✅ Form inputs should show focus states
- ✅ Navigation should highlight current page
- ✅ Cards should respond to clicks

---

## 🔍 Backend Integration Testing

### Supabase Connection

1. ✅ Open browser console (F12)
2. ✅ Complete a booking
3. ✅ Check console for API calls:
   - POST to `/make-server-a628c144/bookings`
   - POST to `/make-server-a628c144/payments`
4. ✅ Verify no errors in console

### Data Persistence

1. ✅ Create a booking
2. ✅ Refresh the page
3. ✅ Go to `/admin`
4. ✅ Verify booking data persists

### Error Handling

1. ✅ Try submitting forms with empty required fields
2. ✅ Try selecting unavailable time slots
3. ✅ Verify appropriate error messages display

---

## 🚀 Quick Test Scenario

**Complete End-to-End Test (5 minutes)**

1. Start at homepage `/`
2. Click yellow "Book Now" button
3. Select "Serengeti Safari Adventure" → Next
4. Set 2 travelers, June 2025 → Next
5. Click "Skip" on inquiry
6. Fill personal info → Next
7. Review details → Continue
8. Select tomorrow, 10:00 AM → Confirm Booking
9. Choose Credit Card → Enter test card → Complete Payment
10. Watch loading screen
11. See confirmation with "Check Your Email" section
12. Return to Home
13. Visit `/admin` to see your booking
14. Visit `/tours` and click another "Book Now"

---

## ✨ Features to Showcase

### Multi-Step Booking Flow

- 8 comprehensive steps
- Optional inquiry step (can skip)
- Review step before committing
- Data persistence across steps
- Back button on all steps

### Real-Time Calendar

- 30-day availability
- Hourly time slots
- Conflict prevention
- Visual feedback

### Multiple Payment Methods

- Credit/Debit cards
- PayPal integration ready
- Mobile money for Tanzania
- Bank transfer option

### Admin Dashboard

- Real-time booking overview
- Revenue tracking
- Meeting schedule
- Calendar management

### Complete User Journey

- Beautiful Figma designs
- Smooth transitions
- Loading states
- Comprehensive confirmations

---

## 🐛 Known Behaviors

1. **Test Mode**: All payments use test credentials
2. **Time Slots**: Currently showing 9 AM - 5 PM, 1-hour intervals
3. **Email**: Confirmation emails are not actually sent (requires email service setup)
4. **Calendar Sync**: Meeting data is stored but not synced to external calendar (requires Google Calendar API)

---

## 📞 Production Checklist

Before going live, you'll need to:

- [ ] Connect real payment processors (Stripe, PayPal)
- [ ] Set up email service (SendGrid, Mailgun)
- [ ] Integrate Google Calendar or Calendly
- [ ] Add SSL certificate
- [ ] Configure environment variables
- [ ] Test on production database
- [ ] Set up monitoring and analytics

---

**Ready to test? Start at `/` and enjoy exploring Grant Expedition! 🦁🏔️🏖️**