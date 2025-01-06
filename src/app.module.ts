import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './app-config/app-config.module';
import { DatabaseModule } from './database/database.module';
import { CriptoModule } from './cripto/cripto.module';

@Module({
  imports: [
    AppConfigModule,
    UsersModule,
    AuthModule,
    DatabaseModule,
    CriptoModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
