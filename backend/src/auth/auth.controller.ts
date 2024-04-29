import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '.prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signin')
  async signIn(@Body() body: any) {
    return this.authService.signIn(body);
  }
  @Post('/signup')
  async signUp(@Body() body: User) {
    return this.authService.signUp(body);
  }
}
