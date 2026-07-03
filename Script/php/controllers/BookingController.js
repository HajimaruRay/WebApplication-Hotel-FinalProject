// Connected to: Script/php/dataBase.js
import { getConnection } from '../dataBase.js';

class BookingController {
    
  async createBooking(req, res) {
    try {
      const { roomNumber, checkInDate, checkOutDate, bookingNameSurname, TypeRoom, Amount } = req.body;

      const db = await getConnection();
      await db.execute(
        'INSERT INTO booking (RoomNumber, CheckInDate, CheckOutDate, bookingName, TypeRoom, Amount) VALUES (?, ?, ?, ?, ?, ?)',
        [roomNumber, checkInDate, checkOutDate, bookingNameSurname, TypeRoom, Amount]
      );

      return res.status(200).json({
        message: 'Booking Success',
        data: { roomNumber, checkInDate, checkOutDate, bookingNameSurname, TypeRoom, Amount }
      });
    } catch (error) {
      console.error('Booking error:', error);

      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
          status: 'error',
          message: 'This Booking already exists'
        });
      }

      return res.status(500).json({
        status: 'error',
        message: 'Booking failed'
      });
    }
  }
}

export default new BookingController();
