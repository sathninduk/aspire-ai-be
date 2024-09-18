import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import e, { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(@Res() res: Response): e.Response<any, Record<string, any>> {
    return res.json(this.appService.getHome());
  }
}
