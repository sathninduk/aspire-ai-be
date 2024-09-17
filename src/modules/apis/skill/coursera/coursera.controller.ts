import { Controller, Get, Res } from '@nestjs/common';
import { CourseraService } from './coursera.service';
import { Response } from 'express';

@Controller('coursera')
export class CourseraController {
  constructor(private readonly courseraService: CourseraService) {}

  @Get('course')
  async findCourses(@Res() res: Response): Promise<void> {
    try {
      const courses = await this.courseraService.findCourses();
      console.log(courses.elements);
      res.send(courses.elements);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching courses');
    }
  }
}
