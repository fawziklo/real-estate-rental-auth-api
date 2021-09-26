import { IUser } from './../users/IUser';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, 
    private jwtService: JwtService) { }

  async validateUser(userEmail: string, pass: string): Promise<any> {

    const user = await this.usersService.findOne(userEmail);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: IUser) {
    const payload = { userEmail: user.email, sub: user.userId };
    console.log(payload)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


}
