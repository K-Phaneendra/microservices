import { app } from './app';
import { bootstrap } from './config/bootstrap';

(async () => {
  await bootstrap();
  app.listen(3000, () => console.log('product-service running'));
})();
