import { Module } from '@nestjs/common';
import { CriptoService } from './cripto.service';
import { AppConfigModule } from 'src/app-config/app-config.module';

@Module({
  imports: [AppConfigModule],
  providers: [CriptoService], 
  exports: [CriptoService],
})
export class CriptoModule {}
