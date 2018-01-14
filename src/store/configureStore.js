import {combineReducers, createStore} from 'redux';

import reposListReducer from '../reducers/reposList';

const reducer = combineReducers({
  reposListReducer
});

export default createStore(reducer);