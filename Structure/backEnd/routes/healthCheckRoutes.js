// Connected to: Script/php/controllers/HealthCheckController.js
import express from 'express';
import healthController from '../controllers/HealthCheckController.js';

const router = express.Router();

router.get('/v2.0/health-check', healthController.checkHealth);

export default router;
