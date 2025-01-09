import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { any } from 'joi';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @ApiBody({
    description: 'Dados para login',
    schema: {
      example: {
        email: 'usuario@exemplo.com',
        password: 'senha_do_usuario',
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Login realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  singIn(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signIn(createAuthDto.email, createAuthDto.password);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Mensagem básica de usuário logado.',
    schema: {
      example: {
        message: 'You have successfully accessed the protected route',
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  getProfile(@Body() createAuthDto: CreateAuthDto) {
    const message = 'You have successfully accessed the protected route';
    return { message };
  }
}
