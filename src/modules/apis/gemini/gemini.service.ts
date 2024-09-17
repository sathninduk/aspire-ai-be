import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import config from '../../../config/config';

@Injectable()
export class GeminiService {
  constructor(private readonly httpService: HttpService) {}

  async getResponse(prompt: string): Promise<any> {
    // Define the JSON data
    const jsonData = {
      contents: [
        {
          parts: [
            {
              text: `${prompt}`,
            },
          ],
        },
      ],
    };

    // Create a new HTTP request
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${config.gemini.apiKey}`;
    try {
      const response = await axios.post(url, jsonData);
      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
