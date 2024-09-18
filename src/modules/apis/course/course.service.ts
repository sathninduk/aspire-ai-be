import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  constructor(private readonly httpService: HttpService) {}

  async getResponse(keyword: string): Promise<any> {
    return keyword;
  }
}
