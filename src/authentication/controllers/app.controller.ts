import { Body, Controller, Post } from '@nestjs/common';
import { ILogin } from '../models/login';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) { }


  @Post('authentication')
  async createUserLogin(@Body() userLogin: ILogin) {
    console.log(userLogin)
  }
}
