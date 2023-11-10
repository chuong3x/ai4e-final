import { Controller, Get, Post, HttpStatus } from '@nestjs/common';

import { AppService } from './app.service';
import { ServerResponse } from './common/models/response.model';
import { IServerResponse } from './common/interfaces/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): string {
    return 'hello';
  }

  @Post()
  predict(): IServerResponse<string> {
    return new ServerResponse(HttpStatus.OK, "OK")
  }
}
