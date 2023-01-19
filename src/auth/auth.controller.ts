import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(AuthGuard('google'))
  async login(@Req() req) {
    return req;
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async redirect(@Req() req) {
    // will send JWT token from here 
    return req;
  }
}
