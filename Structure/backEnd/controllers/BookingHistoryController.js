import { getConnection } from "../dataBase.js";

class BookingHistoryController {
  async getBookingHistory(req, res) {
    try {
        const { bookingName } = req.body;
      const db = await getConnection();
      const [rows] = await db.execute("SELECT TypeRoom, Amount, CheckInDate, CheckOutDate FROM booking WHERE BookingName = ?", [bookingName]);
      if (res.statusCode === 200 && rows.length === 0) {
        return res.status(200).json({
          message: "No booking history found",
          data: []
        });
      }
      return res.status(200).json({
        message: "Booking history retrieved successfully",
        data: rows,
      });
    } catch (error) {
      console.error("Error retrieving booking history:", error);
      return res.status(500).json({
        status: "error",
        message: "Failed to retrieve booking history",
        error: error.message
      });
    }
  }
}

export default new BookingHistoryController();