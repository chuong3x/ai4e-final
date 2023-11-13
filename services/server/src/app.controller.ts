import { Controller, Get, Post, HttpStatus, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { ServerResponse } from './common/models/response.model';
import { IServerResponse } from './common/interfaces/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async healthCheck(): Promise<IServerResponse<string>> {
    const message = await this.appService.healthCheck();
    return new ServerResponse(HttpStatus.OK, 'OK', message);
  }
}
