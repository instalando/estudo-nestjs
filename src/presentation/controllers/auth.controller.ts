import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from '@/presentation/dto/auth';

import { AuthService } from '@/data/services';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
