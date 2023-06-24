import { AnyAction } from "redux";

const INITIAL_STATE = {
  currUser: null,
};

export const user = (state = INITIAL_STATE, action: AnyAction) => {
  return {
    ...state,
    currUser: action.currUser,
  };
};
