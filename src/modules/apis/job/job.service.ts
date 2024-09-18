import { Injectable } from '@nestjs/common';
import { JoobleService } from './jooble/jooble.service';
import { Job } from './job.interface';

@Injectable()
export class JobService {
  constructor(private readonly courseraService: JoobleService) {}

  async getResponse(
    keyword: string,
    location: string,
    page: string,
  ): Promise<Job[]> {
    const jobs = await this.courseraService.findJoobleJobs(
      keyword,
      location,
      page,
    );
    console.log(jobs.jobs);
    // return null;
    return jobs.jobs.map((job: any) => ({
      position: job.title,
      company: job.company,
      location: job.location,
      url: job.link,
      source: job.source,
    }));
  }
}
