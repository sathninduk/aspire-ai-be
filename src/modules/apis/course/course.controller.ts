import { Controller, Get, Req, Res } from '@nestjs/common';
import { CourseService } from './course.service';
import { Response, Request } from 'express';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get('')
  async getCourseResponse(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    // get keyword from query parameters
    const keyword = Array.isArray(req.query.keyword)
      ? req.query.keyword[0]
      : req.query.keyword;

    try {
      const response = await this.courseService.getResponse(keyword as string);
      res.send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching response');
    }
  }
}
