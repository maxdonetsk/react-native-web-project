const BASE_URL = 'https://api.github.com';

export const apiRequests = {
  getAllRepos: `${BASE_URL}/search/repositories?q=map+language:javascript&sort=stars&order=desc`,
  getRepo: `${BASE_URL}/repos/`,
};