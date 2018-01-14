import keymirror from 'keymirror';


module.exports = {
  ActionTypes: keymirror({

    /**
     * Repos
     */
    GET_REPOS_REQUEST_START: null,
    GET_REPOS_REQUEST_FINISH: null,
    GET_REPOS_REQUEST_SUCCESS: null
  }),

  BASE_URL: 'https://api.github.com'
};
