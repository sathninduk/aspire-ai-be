import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import config from '../../../config/config';

@Injectable()
export class AiService {
  constructor(private readonly httpService: HttpService) {}

  async getBadgesResponse(
    prompt: string,
  ): Promise<{ courseKeywords: string[]; jobKeywords: string[] }> {
    function parseCourseKeywords(text: string): string[] {
      // parse text to json
      const jsonData = JSON.parse(text);
      // get the course keywords
      return jsonData.courseKeywords;
    }

    function parseJobKeywords(text: string): string[] {
      // parse text to json
      const jsonData = JSON.parse(text);
      // get the course keywords
      return jsonData.jobKeywords;
    }

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
      let textResponse = response.data.candidates[0].content.parts[0].text;
      // remove ```json and ``` from the response
      textResponse = textResponse.replace(/```json/g, '');
      textResponse = textResponse.replace(/```/g, '');

      // Parse the text response to extract keywords (more on this later)
      const courseKeywords = parseCourseKeywords(textResponse);
      const jobKeywords = parseJobKeywords(textResponse);
      return { courseKeywords, jobKeywords };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

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
