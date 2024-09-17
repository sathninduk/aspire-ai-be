import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GeminiController } from './gemini.controller';
import { GeminiService } from './gemini.service';

@Module({
  imports: [HttpModule],
  controllers: [GeminiController],
  providers: [GeminiService],
})
export class GeminiModule {}
