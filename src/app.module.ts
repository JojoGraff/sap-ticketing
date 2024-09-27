import { Module } from '@nestjs/common';
import { FetchApiModule } from './fetch-api/fetch.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FetchApiModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
