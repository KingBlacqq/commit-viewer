import axios from 'axios';

const githubToken = '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';
const Api = axios.create({
  baseURL:"https://api.github.com/",
  // baseURL:"https://api.github.com/search/repositories?q=language:javaScript+sort:stars&per_page=5",  
  headers: {
    'Accept': 'application/vnd.GitHub.v3+json',
    'Authorization': 'token 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'
  }
})

export default Api;