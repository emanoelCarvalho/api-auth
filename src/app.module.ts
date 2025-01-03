import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './app-config/app-config.module';
import { AppConfigService } from './app-config/app-config.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AppConfigModule,
    UsersModule,
    AuthModule,
    DatabaseModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
