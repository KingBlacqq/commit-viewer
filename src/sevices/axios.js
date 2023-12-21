import axios from 'axios';

const githubToken = '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';
const Api = axios.create({
  // baseURL:"https://api.github.com/",
  baseURL:"https://api.github.com/search/repositories?q=language:javaScript+sort:stars&per_page=5",  
  headers: {
    'Accept': 'application/vnd.GitHub.v3+json',
    'Authorization': 'token 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'
  }
})

export default Api;