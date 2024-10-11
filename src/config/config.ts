const config = {
  mongoDB: {
    // url: 'mongodb://localhost:27017/aspireai',
    url: 'mongodb+srv://sathnidukottage:C2ly3Xe72jQc7Pxu@devcluster.smp9t.mongodb.net/aspireai?retryWrites=true&w=majority&appName=DevCluster',
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
