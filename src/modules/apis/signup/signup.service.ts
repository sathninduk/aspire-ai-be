import { Injectable } from '@nestjs/common';

@Injectable()
export class SignupService {
  constructor() {}
  async getResponse(number: string): Promise<any> {
    console.log('SignupService.getResponse', number);
    return {};
  }
}
