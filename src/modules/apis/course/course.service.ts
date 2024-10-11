import { Injectable } from '@nestjs/common';
import { CourseraService } from './coursera/coursera.service';
import { Course } from './course.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class CourseService {
  constructor(
    private readonly courseraService: CourseraService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async getResponse(keyword: string): Promise<Course[]> {
    const courses = await this.courseraService.findCourseraCourses(keyword);
    return courses.elements.map((course: any) => ({
      title: course.name,
      url: `https://www.coursera.org/learn/${course.slug}`,
      source: `Coursera`,
    }));
  }

  async getPersonalizedResponse(number: string): Promise<Course[]> {
    // get user data from db
    const { skills } = await this.userModel.findOne({ number });

    const personalizedCourses: Course[] = [];

    for (const skill of skills) {
      const courses = await this.courseraService.findOneCourseraCourses(
        skill.title,
      );
      personalizedCourses.push({
        title: courses.elements[0].name,
        url: `https://www.coursera.org/learn/${courses.elements[0].slug}`,
        source: `Coursera`,
      });
    }

    return personalizedCourses;
  }
}
