import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './modules/apis/course/course.module';
import { CourseraModule } from './modules/apis/course/coursera/coursera.module';
import { GeminiModule } from './modules/apis/gemini/gemini.module';

@Module({
  imports: [CourseModule, CourseraModule, GeminiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
