class BookingSystem {
    constructor() {
        this.facilities = {
            Clubhouse: {
                slots: [
                    { start: "10:00", end: "16:00", rate: 100 },
                    { start: "16:00", end: "22:00", rate: 500 }
                ],
                bookings: []
            },
            TennisCourt: {
                rate: 50,
                bookings: []
            }
        };
    }

    parseTime(time) {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }

    isAvailable(facility, date, startTime, endTime) {
        const start = this.parseTime(startTime);
        const end = this.parseTime(endTime);

        for (let booking of this.facilities[facility].bookings) {
            if (booking.date === date) {
                const bookedStart = this.parseTime(booking.startTime);
                const bookedEnd = this.parseTime(booking.endTime);
                if ((start < bookedEnd) && (end > bookedStart)) {
                    return false;
                }
            }
        }
        return true;
    }

    calculateAmount(facility, startTime, endTime) {
        const start = this.parseTime(startTime);
        const end = this.parseTime(endTime);
        let totalAmount = 0;

        if (facility === 'Clubhouse') {
            for (let slot of this.facilities.Clubhouse.slots) {
                const slotStart = this.parseTime(slot.start);
                const slotEnd = this.parseTime(slot.end);
                const slotRate = slot.rate;

                if (end <= slotStart || start >= slotEnd) continue;

                const actualStart = Math.max(start, slotStart);
                const actualEnd = Math.min(end, slotEnd);
                const duration = (actualEnd - actualStart) / 60;
                totalAmount += duration * slotRate;
            }
        } else if (facility === 'TennisCourt') {
            const duration = (end - start) / 60;
            totalAmount = duration * this.facilities.TennisCourt.rate;
        }

        return totalAmount;
    }

    book(facility, date, startTime, endTime) {
        if (!this.isAvailable(facility, date, startTime, endTime)) {
            return `Booking Failed, Already Booked`;
        }

        const amount = this.calculateAmount(facility, startTime, endTime);
        this.facilities[facility].bookings.push({ date, startTime, endTime });
        return `Booked, Rs. ${amount}`;
    }
}

const bookingSystem = new BookingSystem();
console.log(bookingSystem.book('Clubhouse', '26-10-2020', '16:00', '22:00')); 
console.log(bookingSystem.book('TennisCourt', '26-10-2020', '16:00', '20:00')); 
console.log(bookingSystem.book('Clubhouse', '26-10-2020', '16:00', '22:00')); 
console.log(bookingSystem.book('TennisCourt', '26-10-2020', '17:00', '21:00'));