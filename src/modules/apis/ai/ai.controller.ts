import { Controller, Post, Req, Res } from '@nestjs/common';
import { AiService } from './ai.service';
import { Response, Request } from 'express';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('request')
  async getAIResponse(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { prompt } = req.body;

    try {
      const AIResponse = await this.aiService.getResponse(prompt);
      res.send(AIResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching AI response');
    }
  }
}