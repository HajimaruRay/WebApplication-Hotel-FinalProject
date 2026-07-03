// Connected to: Script/php/controllers/BookingController.js
import express from 'express';
import bookingController from '../controllers/BookingController.js';

const router = express.Router();

router.post('/v2.0/booking', bookingController.createBooking);

export default router;
