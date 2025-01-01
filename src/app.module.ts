import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './app-config/app-config.module';

@Module({
  imports: [AppConfigModule, UsersModule, AuthModule, AppConfigModule],
  controllers: [AppController],
})
export class AppModule {}
