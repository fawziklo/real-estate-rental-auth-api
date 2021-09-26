import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ILogin } from './login';

@Controller()
export class AppController {
  constructor(private appService: AppService) { }


  @Post('authentication')
  async createUserLogin(@Body() userLogin: ILogin) {
    console.log(userLogin)
  }
}
