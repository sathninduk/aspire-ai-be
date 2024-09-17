import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CourseraController } from './coursera.controller';
import { CourseraService } from './coursera.service';

@Module({
  imports: [HttpModule],
  controllers: [CourseraController],
  providers: [CourseraService],
})
export class CourseraModule {}
