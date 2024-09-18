import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  imports: [HttpModule],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
