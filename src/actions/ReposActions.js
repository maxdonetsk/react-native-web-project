import axios from 'axios';

import {BASE_URL, ActionTypes} from '../constants/AppConstants';

class ReposActions {

  getAll() {
    return dispatch => {
      return axios.get(`${BASE_URL}/search/repositories?q=map+language:javascript&sort=stars&order=desc`)
        .then(({data}) => dispatch({
          type: ActionTypes.GET_REPOS_REQUEST_SUCCESS,
          data
        }))
        .catch(({message}) => dispatch({
            type: ActionTypes.GET_REPOS_REQUEST_FAIL,
            errMessage: message
          })
        );
    };
  };

  getRepo(params) {
    return dispatch => {
      return axios.get(`${BASE_URL}/repos/${params}`)
        .then(({data}) => {
          dispatch({
            type: ActionTypes.GET_REPO_REQUEST_SUCCESS,
            data
          })
        })
        .catch(({message}) => dispatch({
            type: ActionTypes.GET_REPO_REQUEST_FAIL,
            errMessage: message
          })
        );
    };
  };

  clearRepo() {
    return dispatch => (
      dispatch({
        type: ActionTypes.CLEAR_REPO
      })
    );
  };
}

export default new ReposActions();
