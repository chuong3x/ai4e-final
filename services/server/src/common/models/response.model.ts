import { HttpStatus } from '@nestjs/common';

import { IServerResponse } from '../interfaces/response.interface';

export class ServerResponse<T> implements IServerResponse<T> {
  statusCode: HttpStatus;
  message: string;
  data?: T;
  constructor(status: HttpStatus, message: string, data?: T) {
    this.statusCode = status;
    this.message = message;
    this.data = data;
  }
}
