import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './app-config/app-config.module';
import { DatabaseModule } from './database/database.module';
import { SwaggerModule } from './swagger/swagger.module';

@Module({
  imports: [AppConfigModule, UsersModule, AuthModule, DatabaseModule, SwaggerModule],
})
export class AppModule {}
