import {handleActions} from 'redux-actions';
import {getReposRequestSuccess, getReposRequestFail} from '../actions/ReposActions';

const defaultState = {
  isLoading: true,
  errMessage: '',
  repos: []
};

export default reposList = handleActions({
  [getReposRequestSuccess]: (state, {payload}) => ({
    ...state,
    repos: payload.data.items,
    isLoading: false
  }),
  [getReposRequestFail]: (state, {payload}) => ({
    ...state,
    errMessage: payload.errMessage,
    isLoading: false
  })
}, defaultState);
