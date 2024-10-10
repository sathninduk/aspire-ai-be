import { Injectable } from '@nestjs/common';
import { CourseraService } from './coursera/coursera.service';
import { Course } from './course.interface';

@Injectable()
export class CourseService {
  constructor(private readonly courseraService: CourseraService) {}

  async getResponse(keyword: string): Promise<Course[]> {
    const courses = await this.courseraService.findCourseraCourses(keyword);
    return courses.elements.map((course: any) => ({
      title: course.name,
      url: `https://www.coursera.org/learn/${course.slug}`,
      source: `Coursera`,
    }));
  }
}
