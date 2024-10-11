import { Injectable } from '@nestjs/common';
import axios from 'axios';
import config from '../../../config/config';  // Adjust the path to your config

@Injectable()
export class InterviewService {
  async getQuestions(jobKeyword: string): Promise<string[]> {
    let prompt = "Give me 10 basic non-technical interview questions that are commonly asked in entry-level job interviews, focusing on general topics like communication, teamwork, and work ethic.";

    if (jobKeyword) {
      prompt = `Give me 10 interview questions for a ${jobKeyword} position, focusing on basic non-technical questions such as communication, teamwork, and problem-solving skills.`;
    }

    const jsonData = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${config.gemini.apiKey}`;

    try {
      const response = await axios.post(url, jsonData);
      const questionsText = response.data.candidates[0].content.parts[0].text;
      
      // Split the response text by newlines or periods to create an array
      const questionsArray = questionsText.split('\n').filter((q) => q.trim() !== '');
      
      return questionsArray; // Return an array of questions
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
