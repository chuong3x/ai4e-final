import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqModule } from './modules/rabbitmq/rabbitmq.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RabbitmqModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'AI4E_SERVICE',
      useFactory: (configService: ConfigService) => {
        const mqUri = configService.get<string>('MQ_URI');
        const mqUser = configService.get<string>('MQ_USER');
        const mqPwd = configService.get<string>('MQ_PWD');
        const inputQueue = configService.get<string>('MQ_INPUT_QUEUE_NAME');
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${mqUser}:${mqPwd}@${mqUri}`],
            queue: inputQueue,
            queueOptions: {
              durable: false,
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
