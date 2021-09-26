import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './authentication/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}