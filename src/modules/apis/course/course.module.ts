import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseraService } from './coursera/coursera.service';
import { CourseController } from './course.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [CourseService, CourseraService],
  controllers: [CourseController],
  exports: [CourseService],
})
export class CourseModule {}
