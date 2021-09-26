import { IUser } from './users/IUser';
import { Body, Controller,Request, Get, Post, UseGuards } from '@nestjs/common';
import { ILogin } from './login';
import { AuthService } from './authentication/auth.service';
import { JwtAuthGuard } from './authentication/guards/jwt-auth.guard';
import { LocalAuthGuard } from './authentication/guards/local-auth.guard';
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('authentication')
  async createUserLogin(@Body() userLogin: ILogin) {
    console.log(userLogin)
  }



  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: IUser) {
    console.log(user)
    return this.authService.login(user);
  }
  

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log("lol")
    return req.user;
  }
}


