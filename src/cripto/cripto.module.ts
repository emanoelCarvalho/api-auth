import { Module } from '@nestjs/common';
import { CriptoService } from './cripto.service';

@Module({
  providers: [CriptoService]
})
export class CriptoModule {}
