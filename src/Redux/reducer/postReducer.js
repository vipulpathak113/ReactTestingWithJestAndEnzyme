import { types } from "../action/types";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case types.GET_TYPES:
      return action.payload;
    default:
      return state;
  }
}
