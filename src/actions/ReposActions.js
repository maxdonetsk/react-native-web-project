import axios from 'axios';

import {BASE_URL, ActionTypes} from '../constants/AppConstants';

export function getAllRepos() {
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
}

export function getRepo(params) {
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
}

export function clearRepo() {
  return dispatch => (
    dispatch({
      type: ActionTypes.CLEAR_REPO
    })
  );
}

