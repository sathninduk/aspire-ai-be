const config = {
  mongoDB: {
    url: 'mongodb://localhost:27017/aspireai',
  },
  googleJobs: {
    clientId: '',
    clientSecret: '',
    redirectUri: 'http://localhost:6340/apis/job/google/callback',
  },
  gemini: {
    apiKey: 'AIzaSyDSNiGyyERWasGmb70pLKC7gcXHEHce8Mo',
  },
  jooble: {
    apiKey: 'ff82e430-dca1-4145-be21-080dfefe0f3d',
  },
};

export default config;
