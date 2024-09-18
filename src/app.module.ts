import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './modules/apis/course/course.module';
import { JobModule } from './modules/apis/job/job.module';
import { AiModule } from './modules/apis/ai/ai.module';

@Module({
  imports: [CourseModule, JobModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
