import {ActionTypes} from '../constants/AppConstants';

const initialState = {
  isLoading: true,
  errMessage: '',
  data: {}
};

export default function reposList(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_REPO_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };

    case ActionTypes.GET_REPO_REQUEST_FAIL:
      return {
        ...state,
        errMessage: action.errMessage,
        isLoading: false
      };

    case ActionTypes.CLEAR_REPO:
      return initialState;

    default:
      return state;
  }
}