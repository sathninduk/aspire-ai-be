import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JoobleService } from './jooble/jooble.service';
import { Job } from './job.interface';
import { User } from '../user/user.schema';

@Injectable()
export class JobService {
  constructor(
    private readonly courseraService: JoobleService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async getResponse(
    keyword: string,
    location: string,
    page: string,
  ): Promise<Job[]> {
    const jobs = await this.courseraService.findJoobleJobs(
      keyword,
      location,
      page,
      '10',
    );
    return jobs.jobs.map((job: any) => ({
      position: job.title,
      company: job.company,
      location: job.location,
      url: job.link,
      source: job.source,
    }));
  }

  async getPersonalizedResponse(
    number: string,
    keyword: string,
    location: string,
    page: string,
  ): Promise<Job[]> {
    // get user data from db
    const { careers } = await this.userModel.findOne({ number });

    const personalizedJobs: Job[] = [];

    for (const career of careers) {
      const jobs = await this.courseraService.findJoobleJobs(
        career,
        location,
        page,
        '1',
      );
      if (jobs.jobs.length > 0) {
        personalizedJobs.push({
          position: jobs.jobs[0].title,
          company: jobs.jobs[0].company,
          location: jobs.jobs[0].location,
          url: jobs.jobs[0].link,
          source: jobs.jobs[0].source,
        });
      }
    }

    return personalizedJobs;
  }
}
