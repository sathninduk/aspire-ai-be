import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { AiService } from '../ai/ai.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly aiService: AiService,
  ) {}

  async getResponse(number: string): Promise<any> {
    console.log('UserService.getResponse', number);
    return {};
  }

  async getUser(number: string): Promise<any> {
    const user = await this.userModel.findOne({ number });
    return user;
  }

  async updateName(
    number: string,
    name: string,
    username: string,
  ): Promise<any> {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { number },
      { $set: { name, username } },
      { new: true },
    );
    return updatedUser;
  }

  async updateEmployed(number: string, isEmployed: boolean): Promise<any> {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { number },
      { $set: { isEmployed } },
      { new: false },
    );
    return updatedUser;
  }

  async updateJob(
    number: string,
    title: string,
    company: string,
  ): Promise<any> {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { number },
      { $set: { title, company } },
      { new: true },
    );
    return updatedUser;
  }

  async updateStatus(
    number: string,
    isStudent: boolean,
    isJobSeeker: boolean,
  ): Promise<any> {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { number },
      { $set: { isStudent, isJobSeeker } },
      { new: true },
    );
    return updatedUser;
  }

  async updateAnswer1(number: string, answer_1: string): Promise<any> {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { number },
      { $set: { answer_1 } },
      { new: true },
    );
    return updatedUser;
  }

  async updateAnswer2(number: string, answer_2: string): Promise<any> {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { number },
      { $set: { answer_2 } },
      { new: true },
    );
    this.generateBadges(number, answer_2);
    return updatedUser;
  }

  async generateBadges(number: string, answer_2: string): Promise<any> {
    // get user data
    const user = await this.userModel.findOne({ number });

    // get prompt
    const prompt = this.getPrompt(
      user.title ? user.title : null,
      user.company ? user.company : null,
      user.isEmployed,
      user.isStudent,
      user.isJobSeeker,
      user.answer_1,
      answer_2,
    );

    const aiResponse = await this.aiService.getBadgesResponse(prompt);

    console.log(aiResponse);

    const updatedUser = await this.userModel.findOneAndUpdate(
      { number },
      {
        $set: {
          skills: aiResponse.courseKeywords,
          careers: aiResponse.jobKeywords,
        },
      },
      { new: true },
    );

    return updatedUser;
  }

  getPrompt(
    title: string,
    company: string,
    isEmployed: boolean,
    isStudent: boolean,
    isJobSeeker: boolean,
    answer_1: string,
    answer_2: string,
  ): string {
    if (isEmployed) {
      return `This is an employed person as a ${title} at ${company}. That person answers for the question: "Can you briefly describe your current
                            experience level, previous roles and the durations you held them?" as "${answer_1}" 
                            and for the question: "Are you currently seeking a career change or promotion?" as "${answer_2}",
                            if this person wants to search for coursera courses to satisfy their requirement, what are the 
                            "keywords" that he/she should search for, and if this person wants to search for job openings,
                            what are the keywords that he/she should search for? give the result as two json arrays, under the sample format of {courseKeywords: [{title: example_keyword_1, progress: 0}, {title: example_keyword_2, progress: 0}], jobKeywords: [example_keyword_1, example_keyword_2]} (strictly adhere to that response format and the pure response should be parse through JSON.parse without any error). Limit each array max 5`;
    } else if (isStudent) {
      return `This is a student. That person answers for the question: "What fields and areas are you currently
                            pursuing?" as "${answer_1}" 
                            and for the question: "What are your ambitions, and how are you
                            currently working to enhance your career?" as "${answer_2}",
                            if this person wants to search for coursera courses to satisfy their requirement, what are the 
                            "keywords" that he/she should search for, and if this person wants to search for job openings,
                            what are the keywords that he/she should search for? give the result as two json arrays, under the sample format of {courseKeywords: [{title: example_keyword_1, progress: 0}, {title: example_keyword_2, progress: 0}], jobKeywords: [example_keyword_1, example_keyword_2]} (strictly adhere to that response format and the pure response should be parse through JSON.parse without any error). Limit each array max 5`;
    } else if (isJobSeeker) {
      return `This is a new job seeker who studied: ${answer_1}. That person answers for the question: "What fields and areas have you studied and mastered?" as "${answer_1}" 
                            and for the question: "What range of roles are you currently interested in?" as "${answer_2}",
                            if this person wants to search for coursera courses to satisfy their requirement, what are the 
                            "keywords" that he/she should search for, and if this person wants to search for job openings,
                            what are the keywords that he/she should search for? give the result as two json arrays, under the sample format of {courseKeywords: [{title: example_keyword_1, progress: 0}, {title: example_keyword_2, progress: 0}], jobKeywords: [example_keyword_1, example_keyword_2]} (strictly adhere to that response format and the pure response should be parse through JSON.parse without any error). Limit each array max 5`;
    } else {
      return null;
    }
  }
}
