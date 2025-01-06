import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AppConfigService } from 'src/app-config/app-config.service';

@Injectable()
export class CriptoService {
    constructor(private readonly configService: AppConfigService) {}
    async hashPassword(password: string): Promise<String> {
        const saltRounds = await this.configService.getSaltRounds; 
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        const isMatch = await bcrypt.compareSync(password, hash);
        return isMatch;
    }
}
