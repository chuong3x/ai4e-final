import { Injectable } from '@nestjs/common';

import { PredictDto } from './modules/rabbitmq/dto/predict.dto';

@Injectable()
export class AppService {
  async healthCheck() {
    return 'OK';
  }

  async predict(payload: PredictDto): Promise<string> {
    return '1';
  }
}
