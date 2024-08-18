import { ConfigModule } from '@nestjs/config';

export const CommonProviders = [
  // Инфраструктурные и внешние модули
  ConfigModule.forRoot(),
];
