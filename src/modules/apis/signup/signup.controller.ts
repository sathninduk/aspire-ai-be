import { Controller, Post, Req, Res } from '@nestjs/common';
import { SignupService } from './signup.service';
import { Response, Request } from 'express';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post('')
  async getSignupResponse(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { number } = req.body;

    try {
      const SignupResponse = await this.signupService.getResponse(number);
      res.send(SignupResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching Signup response');
    }
  }
}
