import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JoobleService } from './jooble/jooble.service';
import { JobController } from './job.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [JobService, JoobleService],
  controllers: [JobController],
  exports: [JobService],
})
export class JobModule {}
