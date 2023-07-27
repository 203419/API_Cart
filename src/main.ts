import app from './cart/infrastructure/app';
import { config } from './config/config';
import { sequelize } from './config/database';

sequelize.sync().then(() => {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
});