import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function certificatesListReducer(
  state = initialState.certificates,
  action
) {
  switch (action.type) {
    case actionTypes.GET_CERTIFICATES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
