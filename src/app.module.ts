import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(__dirname, '../.env'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
