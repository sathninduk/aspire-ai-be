import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseraService } from './coursera/coursera.service';
import { CourseController } from './course.controller';

@Module({
  providers: [CourseService, CourseraService],
  controllers: [CourseController],
  exports: [CourseService],
})
export class CourseModule {}
