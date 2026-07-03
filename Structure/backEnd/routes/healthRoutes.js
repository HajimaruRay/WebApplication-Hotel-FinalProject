// Connected to: Script/php/controllers/HealthController.js
import express from 'express';
import healthController from '../controllers/HealthController.js';

const router = express.Router();

router.get('/v2.0/health-check', healthController.checkHealth);

export default router;
