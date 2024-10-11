import { Controller, Get, Req, Res } from '@nestjs/common';
import { JobService } from './job.service';
import { Response, Request } from 'express';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('')
  async getJobResponse(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { keyword, location, page } = req.query;

    try {
      const response = await this.jobService.getResponse(
        keyword as string,
        location as string,
        page as string,
      );
      res.send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching response');
    }
  }

  @Get('personalized')
  async getPersonalizedJobResponse(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { number, keyword, location, page } = req.query;

    try {
      const response = await this.jobService.getPersonalizedResponse(
        number as string,
        keyword as string,
        location as string,
        page as string,
      );
      res.send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching response');
    }
  }
}
