import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseraModule } from './modules/apis/skill/coursera/coursera.module';
import { GeminiModule } from './modules/apis/gemini/gemini.module';

@Module({
  imports: [CourseraModule, GeminiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
