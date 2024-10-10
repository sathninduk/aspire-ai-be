import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  constructor() {}
  async getResponse(number: string): Promise<any> {
    console.log('LoginService.getResponse', number);
    return {};
  }
}
