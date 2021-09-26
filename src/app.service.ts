import { Injectable } from '@nestjs/common';
import {ILogin} from './login'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUserLogin(): string {

    return 'Received!';
  }
}
