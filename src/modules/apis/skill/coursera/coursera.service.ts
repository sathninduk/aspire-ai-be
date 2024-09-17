import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CourseraService {
  constructor(private readonly httpService: HttpService) {}

  async findCourses(): Promise<any> {
    const url =
      'https://api.coursera.org/api/courses.v1?q=search&query=sql tuning';
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
