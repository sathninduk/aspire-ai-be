import { Injectable } from '@nestjs/common';
import axios from 'axios';
import config from '../../../../config/config';

@Injectable()
export class JoobleService {
  async findJoobleJobs(
    keyword: string,
    location: string,
    page: string,
    resultOnPage: string,
  ): Promise<any> {
    const url = `https://jooble.org/api/${config.jooble.apiKey}`;
    try {
      const response = await axios.post(url, {
        keywords: keyword,
        location: location,
        page: page,
        ResultOnPage: resultOnPage,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
