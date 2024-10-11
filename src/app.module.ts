import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './modules/apis/course/course.module';
import { JobModule } from './modules/apis/job/job.module';
import { AiModule } from './modules/apis/ai/ai.module';
import { InterviewModule } from './modules/apis/interview/interview.module';
import { LoginModule } from './modules/apis/login/login.module';
import { SignupModule } from './modules/apis/signup/signup.module';
import { UserModule } from './modules/apis/user/user.module';
import config from './config/config';

@Module({
  imports: [
    CourseModule,
    JobModule,
    AiModule,
    InterviewModule,
    LoginModule,
    MongooseModule.forRoot(config.mongoDB.url),
    SignupModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
