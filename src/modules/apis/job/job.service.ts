import { Injectable } from '@nestjs/common';
import { JoobleService } from './jooble/jooble.service';
import { Job } from './job.interface';

@Injectable()
export class JobService {
  constructor(private readonly courseraService: JoobleService) {}

  async getResponse(keyword: string): Promise<Job[]> {
    const courses = await this.courseraService.findJoobleJobs(keyword);
    return courses.elements.map((course: any) => ({
      title: course.name,
      url: `https://www.coursera.org/learn/${course.slug}`,
    }));
  }
}
