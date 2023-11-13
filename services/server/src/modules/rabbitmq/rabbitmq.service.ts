import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RabbitMQService {
  constructor(@Inject('RABBITMQ_SERVICE') private client: ClientProxy) {}

  async sendMessage(message: any, pattern: string) {
    return await lastValueFrom(
      this.client.send(pattern, { message, correlationId: 1 }),
    );
  }
}
