import express from "express";
import bookingHistoryController from "../controllers/BookingHistoryController.js";

const router = express.Router();

router.post("/v2.0/booking-history", bookingHistoryController.getBookingHistory);

export default router;