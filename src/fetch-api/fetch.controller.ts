import { Controller, Get } from '@nestjs/common';
import { FetchApiService } from './fetch.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('fetch-api')
export class FetchApiController {
  constructor(private readonly fetchApiService: FetchApiService) {}

  @Get('cases')
  @ApiOperation({ summary: 'Fetch Cases' }) // Description of the endpoint
  @ApiResponse({
    status: 200,
    description: 'Returns ',
  })
  @ApiResponse({ status: 400, description: 'Name is required.' })
  async getData() {
    return await this.fetchApiService.fetchData();
  }
}
