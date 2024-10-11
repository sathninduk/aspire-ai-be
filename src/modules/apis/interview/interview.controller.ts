import { Controller, Post, Body } from '@nestjs/common';
import { InterviewService } from './interview.service';

@Controller('interview')
export class InterviewController {
  constructor(private readonly interviewService: InterviewService) {}

  @Post('questions')
  async getInterviewQuestions(@Body('jobKeyword') jobKeyword: string) {
    const questions = await this.interviewService.getQuestions(jobKeyword);
    return { questions }; 
  }
}
