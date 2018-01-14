import {ActionTypes} from '../constants/AppConstants';

const initialState = {
  repos: []
};

export default function stationsListReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_REPOS_REQUEST_SUCCESS:
      return {
        ...state,
        repos: action.data.items
      };

    default:
      return state;
  }
}