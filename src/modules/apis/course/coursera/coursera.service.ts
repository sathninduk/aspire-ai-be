import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CourseraService {
  async findCourseraCourses(keyword: string): Promise<any> {
    const url = `https://api.coursera.org/api/courses.v1?q=search&query=${keyword}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
