import { Controller, Get, Post, Put, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response, Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async getUsers(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { number } = req.params;
    try {
      const users = await this.userService.getUser(number);
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching Users');
    }
  }

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

  @Put('name')
  async updateUserName(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { number, name, username } = req.body;

    try {
      const UserResponse = await this.userService.updateName(
        number,
        name,
        username,
      );
      res.send(UserResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while updating User name');
    }
  }

  @Put('employed')
  async updateEmployed(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { number, isEmployed } = req.body;

    try {
      const UserResponse = await this.userService.updateEmployed(
        number,
        isEmployed,
      );
      res.send(UserResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while updating User name');
    }
  }

  @Put('job-details')
  async updateJobDetails(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { number, title, company } = req.body;

    try {
      const UserResponse = await this.userService.updateJob(
        number,
        title,
        company,
      );
      res.send(UserResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while updating User name');
    }
  }

  @Put('status')
  async updateStatus(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { number, isStudent, isJobSeeker } = req.body;
    try {
      const UserResponse = await this.userService.updateStatus(
        number,
        isStudent,
        isJobSeeker,
      );
      res.send(UserResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while updating User name');
    }
  }
}
