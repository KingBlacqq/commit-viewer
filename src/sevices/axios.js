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