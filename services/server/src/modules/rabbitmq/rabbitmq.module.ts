import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { RabbitMQService } from './rabbitmq.service';
import { RabbitMQController } from './rabbitmq.controller';

@Module({
  controllers: [RabbitMQController],
  providers: [
    RabbitMQService,
    {
      provide: 'RABBITMQ_SERVICE',
      useFactory: (configService: ConfigService) => {
        const mqUri = configService.get<string>('MQ_URI');
        const mqUser = configService.get<string>('MQ_USER');
        const mqPwd = configService.get<string>('MQ_PWD');
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${mqUser}:${mqPwd}@${mqUri}`],
            queue: 'input-queue-name',
            queueOptions: {
              durable: false,
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [RabbitMQService],
})
export class RabbitmqModule {}
