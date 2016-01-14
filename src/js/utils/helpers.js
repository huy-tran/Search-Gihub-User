import axios from 'axios';

function getBio (username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

export default function getGithubInfo (username) {
  return axios.all([getBio(username), getRepos(username)])
     .then((arr) => ({ bio: arr[0].data, repos: arr[1].data }));
};