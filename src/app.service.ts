import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  returnLink(): string {
    return 'nestjs.com';
  }
}
