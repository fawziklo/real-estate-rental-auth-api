import { Injectable } from '@nestjs/common';
import { IUser } from './IUser';


@Injectable()
export class UsersService {
  //place to ORM
  private readonly users = [
    {
      userId: 1,
      email: 'fawzi.rida@hotmail.com',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
    {
      userId: 3,
      email: "okok@ok.com",
      password: "12345"
    }
  ];

  async findOne(userEmail: string): Promise<IUser | undefined> {
    return this.users.find(user => user.email === userEmail);
  }
}
