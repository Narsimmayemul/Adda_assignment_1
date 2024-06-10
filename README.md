# Booking System

This JavaScript class `BookingSystem` manages bookings for facilities like Clubhouse and Tennis Court, calculating booking availability and charges based on time slots.

### Usage

1. **Initialization:**
   ```javascript
   const bookingSystem = new BookingSystem();
   ```

2. **Booking a Facility:**
   ```javascript
   console.log(bookingSystem.book('Clubhouse', '26-10-2020', '16:00', '22:00'));
   // Output: Booked, Rs. 400

   console.log(bookingSystem.book('TennisCourt', '26-10-2020', '16:00', '20:00'));
   // Output: Booked, Rs. 200

   console.log(bookingSystem.book('Clubhouse', '26-10-2020', '16:00', '22:00'));
   // Output: Booking Failed, Already Booked

   console.log(bookingSystem.book('TennisCourt', '26-10-2020', '17:00', '21:00'));
   // Output: Booked, Rs. 200
   ```

### Explanation

- **Constructor:**
  - Initializes `facilities` with slots and bookings for Clubhouse and Tennis Court.

- **Methods:**
  - `parseTime(time)`: Converts time to minutes for comparison.
  - `isAvailable(facility, date, startTime, endTime)`: Checks if the facility is available for booking at the specified time.
  - `calculateAmount(facility, startTime, endTime)`: Calculates the booking amount based on the duration and rate.
  - `book(facility, date, startTime, endTime)`: Books the facility if available, calculates the amount, and updates bookings.

### Example

- **Booking Flow:**
  - Attempts to book Clubhouse from 16:00 to 22:00 on 26-10-2020. Successful booking computes to Rs. 400.
  - Attempts to book Tennis Court from 16:00 to 20:00 on the same date. Successful booking computes to Rs. 200.
  - Attempts to book Clubhouse again for the same slot, but it fails due to existing booking.
  - Finally, books Tennis Court from 17:00 to 21:00, resulting in Rs. 200.

### Notes

- Adjustments can be made to handle edge cases like overlapping bookings or additional facilities.
- Ensure to handle date formatting and validation based on specific requirements.

---

You can add more sections or details as per your project's specific needs or additional functionalities.
