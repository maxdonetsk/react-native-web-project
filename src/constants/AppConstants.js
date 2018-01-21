import keymirror from 'keymirror';


module.exports = {
  ActionTypes: keymirror({

    /**
     * Repos
     */
    GET_REPOS_REQUEST_FAIL: null,
    GET_REPOS_REQUEST_SUCCESS: null,
    GET_REPO_REQUEST_FAIL: null,
    GET_REPO_REQUEST_SUCCESS: null,
    CLEAR_REPO: null
  }),

  BASE_URL: 'https://api.github.com'
};
