import express from 'express';
import routes from './routes';
export const app = express();
app.use(express.json());
app.use('/api', routes);
app.get('/health', (_, res) => res.json({ service: 'auth-service', status: 'ok' }));
