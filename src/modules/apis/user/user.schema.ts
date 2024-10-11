// src/modules/apis/signup/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  number: string;

  @Prop({ required: false })
  name: string;

  @Prop({ required: false, unique: false })
  username: string;

  @Prop({ required: false })
  isEmployed: boolean;

  @Prop()
  title?: string;

  @Prop()
  company?: string;

  @Prop({ required: false })
  isStudent: boolean;

  @Prop({ required: false })
  isJobSeeker: boolean;

  @Prop({ required: false })
  answer_1: string;

  @Prop({ required: false })
  answer_2: string;

  @Prop({ required: false })
  skills: any[];

  @Prop({ required: false })
  careers: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
