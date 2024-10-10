import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JoobleService } from './jooble/jooble.service';
import { JobController } from './job.controller';

@Module({
  providers: [JobService, JoobleService],
  controllers: [JobController],
  exports: [JobService],
})
export class JobModule {}
