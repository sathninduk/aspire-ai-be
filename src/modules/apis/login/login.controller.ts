import { Controller, Post, Req, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response, Request } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('')
  async getLoginResponse(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { number } = req.body;

    try {
      const LoginResponse = await this.loginService.getResponse(number);
      res.send(LoginResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching Login response');
    }
  }
}
