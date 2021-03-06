import axios from 'axios';
import {createActions} from 'redux-actions';

import {apiRequests} from '../constants/AppConstants';

export const {
  getReposRequestSuccess,
  getReposRequestFail,
  getRepoRequestSuccess,
  getRepoRequestFail,
  clearRepo
} = createActions({
  GET_REPOS_REQUEST_SUCCESS: data => ({data}),
  GET_REPOS_REQUEST_FAIL: errMessage => ({errMessage}),
  GET_REPO_REQUEST_SUCCESS: data => ({data}),
  GET_REPO_REQUEST_FAIL: errMessage => ({errMessage}),
  CLEAR_REPO: () => {}
});

export const getAllRepos = () => dispatch => axios.get(`${apiRequests.getAllRepos}`)
  .then(
    ({data}) => dispatch(getReposRequestSuccess(data)),
    ({message}) => dispatch(getReposRequestFail(message))
  );

export const getRepo = params => {
  return dispatch => {
    return axios.get(`${apiRequests.getRepo}${params}`)
      .then(
        ({data}) => dispatch(getRepoRequestSuccess(data)),
        ({message}) => dispatch(getRepoRequestFail(message))
      );
  };
};


