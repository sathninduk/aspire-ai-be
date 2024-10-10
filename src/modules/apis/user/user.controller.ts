import { Controller, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response, Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async getUserResponse(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { number } = req.body;

    try {
      const UserResponse = await this.userService.getResponse(number);
      res.send(UserResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching User response');
    }
  }
}
