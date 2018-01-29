import {handleActions} from 'redux-actions';
import {getRepoRequestSuccess, getRepoRequestFail, clearRepo} from '../actions/ReposActions';

const defaultState = {
  isLoading: true,
  errMessage: '',
  data: {}
};

export default repo = handleActions({
  [getRepoRequestSuccess]: (state, {payload}) => ({
    ...state,
    data: payload.data,
    isLoading: false
  }),
  [getRepoRequestFail]: (state, {payload}) => ({
    ...state,
    errMessage: payload.errMessage,
    isLoading: false
  }),
  [clearRepo]: () => defaultState
}, defaultState);
