import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService {
  constructor(private readonly httpService: HttpService) {}

  async getResponse(): Promise<any> {
    
  }
}
