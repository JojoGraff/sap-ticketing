import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FetchApiService {
  constructor(private configService: ConfigService) {}
  async fetchData(): Promise<any> {
    const url = this.configService.get<string>('SAP_CLOUD_ENDPOINT');
    const username = this.configService.get<string>('SERVICE_CLOUD_USER');
    const password = this.configService.get<string>('PASSWORD');

    const response = await fetch(url, {
      headers: {
        Authorization:
          'Basic ' + Buffer.from(username + ':' + password).toString('base64'),
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
  }
}
