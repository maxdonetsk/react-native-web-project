import {combineReducers, createStore} from 'redux';

import stationsListReducer from '../reducers/stationsList';

const reducer = combineReducers({
  stationsListReducer
});

export default createStore(reducer);