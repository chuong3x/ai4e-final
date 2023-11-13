import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RabbitMQService } from './rabbitmq.service';

@Controller()
export class RabbitMQController {
  constructor(private readonly rabbitmqService: RabbitMQService) {}

  @MessagePattern('input_queue_name')
  handleMessage(data: any): any {
    // Xử lý tin nhắn và trả lời trực tiếp
    const response = `Received message: ${data}`;
    console.log(response);

    return response;
  }
}
