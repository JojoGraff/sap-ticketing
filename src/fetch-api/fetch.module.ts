import { Module } from '@nestjs/common';
import { FetchApiService } from './fetch.service';
import { FetchApiController } from './fetch.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [FetchApiController],
  providers: [FetchApiService],
})
export class FetchApiModule {}
