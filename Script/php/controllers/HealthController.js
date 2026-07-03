// Connected to: Script/php/dataBase.js
import { getConnection } from '../dataBase.js';

class HealthController {
  async checkHealth(req, res) {
    try {
      const db = await getConnection();
      await db.execute('SELECT 1');

      return res.status(200).json({
        status: 'ok',
        message: 'Server is healthy',
        database: 'connected'
      });
    } catch (error) {
      console.error('Health check failed:', error);

      return res.status(503).json({
        status: 'error',
        message: 'Server is unhealthy',
        database: 'disconnected'
      });
    }
  }
}

export default new HealthController();
