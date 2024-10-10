import { Controller, Post, Req, Res, Body } from '@nestjs/common';
import { InterviewService } from './interview.service';
import { Response } from 'express';

@Controller('interview')
export class InterviewController {
  constructor(private readonly interviewService: InterviewService) {}

  @Post('questions')
  async getInterviewQuestions(
    @Res() res: Response,
    @Body() body: { jobKeyword: string },  // Get jobKeyword from request body
  ): Promise<void> {
    const { jobKeyword } = body;

    try {
      const AIResponse = await this.interviewService.getQuestions(jobKeyword);
      res.send(AIResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching interview questions');
    }
  }
}
