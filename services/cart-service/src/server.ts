import { app } from './app';
import { bootstrap } from './config/bootstrap';

const PORT = process.env.PORT || 3000;

(async () => {
  await bootstrap();
  app.listen(PORT, () => console.log('cart-service running on port', PORT));
})();
