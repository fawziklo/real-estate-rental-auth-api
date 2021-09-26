import { Module } from '@nestjs/common';
import { AppController } from './authentication/controllers/app.controller';
import { AppService } from './authentication/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
