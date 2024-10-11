// src/modules/apis/signup/signup.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';

@Injectable()
export class SignupService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getResponse(number: string): Promise<any> {
    console.log('SignupService.getResponse', number);
    const newUser = new this.userModel({ number });
    await newUser.save();
    return newUser;
  }
}