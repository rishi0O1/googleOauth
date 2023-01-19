import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('google/login')
  @UseGuards(AuthGuard('google'))
  async login(@Req() req) {
    return req;
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async redirect(@Req() req) {
    // will send JWT token from here
    return 'jwt token';
    // return this.authService.signToken(req?.user);
  }
}
