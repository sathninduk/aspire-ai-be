import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './modules/apis/course/course.module';
import { JobModule } from './modules/apis/job/job.module';
import { AiModule } from './modules/apis/ai/ai.module';
import { InterviewModule } from './modules/apis/interview/interview.module'

@Module({
  imports: [CourseModule, JobModule, AiModule, InterviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
