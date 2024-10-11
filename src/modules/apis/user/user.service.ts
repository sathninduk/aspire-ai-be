import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

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
    return updatedUser;
  }
}
