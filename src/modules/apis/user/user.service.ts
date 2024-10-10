import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  async getResponse(number: string): Promise<any> {
    console.log('UserService.getResponse', number);
    return {};
  }
}
