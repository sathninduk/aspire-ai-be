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
  employed: boolean;

  @Prop()
  job_title?: string;

  @Prop()
  company?: string;

  @Prop({ required: false })
  student: boolean;

  @Prop({ required: false })
  job_seeker: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
