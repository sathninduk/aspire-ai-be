import { Controller, Post, Res } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { Response } from 'express';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('request')
  async getGeminiResponse(@Res() res: Response): Promise<void> {
    try {
      const AIResponse = await this.geminiService.getResponse();
      console.log(AIResponse);
      res.send(AIResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching AI response');
    }
  }
}
