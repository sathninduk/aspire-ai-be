import { Controller, Post, Req, Res } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { Response, Request } from 'express';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('request')
  async getGeminiResponse(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { prompt } = req.body;

    try {
      const AIResponse = await this.geminiService.getResponse(prompt);
      console.log(AIResponse);
      res.send(AIResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching AI response');
    }
  }
}