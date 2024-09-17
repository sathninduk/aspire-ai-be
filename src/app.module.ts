import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseraModule } from './modules/apis/skill/coursera/coursera.module';

@Module({
  imports: [CourseraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
