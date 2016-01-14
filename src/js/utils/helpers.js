var axios = require('axios');

function getBio (username) {
  return axios.get('https://api.github.com/users/' + username);
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos');
}

var helpers = {
  getGithubInfo: function (username) {
    return axios.all([getBio(username), getRepos(username)])
     .then(function (arr) {
       return {
         bio: arr[0].data,
         repos: arr[1].data
       };
    });
  }
};

module.exports = helpers;