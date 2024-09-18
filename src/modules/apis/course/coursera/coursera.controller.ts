import { Controller, Get, Req, Res } from '@nestjs/common';
import { CourseraService } from './coursera.service';
import { Request, Response } from 'express';

@Controller('coursera')
export class CourseraController {
  constructor(private readonly courseraService: CourseraService) {}

  @Get('course')
  async findCourses(@Req() req: Request, @Res() res: Response): Promise<void> {
    // get keyword from query parameters
    const keyword = Array.isArray(req.query.keyword)
      ? req.query.keyword[0]
      : req.query.keyword;

    try {
      const courses = await this.courseraService.findCourseraCourses(
        keyword as string,
      );
      console.log(courses.elements);
      res.send(courses.elements);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching courses');
    }
  }
}
