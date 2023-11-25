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