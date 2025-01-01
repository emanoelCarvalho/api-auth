import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './app-config/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);
  const port = configService.getPort; 
  console.log(`Server is running on port ${port}`);
  await app.listen(3000);
}
bootstrap();
