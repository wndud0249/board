import { LOG_IN_REQUEST } from './types';

const initialState = {
  anyData: 111,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        anyData: 222,
      };
    default:
      break;
  }
  return state;
};

export default userReducer;
