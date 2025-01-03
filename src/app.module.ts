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
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: async (configService: AppConfigService ) => ({
        type: 'postgres', 
        host: configService.getDbHost, 
        port: configService.getDbPort, 
        username: configService.getDbUsername,
        password: configService.getDbPassword, 
        database: configService.getDbName,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }), 
      inject: [AppConfigService]
    }),
    UsersModule,
    AuthModule,
    DatabaseModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
