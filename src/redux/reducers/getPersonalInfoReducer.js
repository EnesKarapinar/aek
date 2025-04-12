import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function getPersonalInfoReducer(
  state = initialState.personalInfo,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PERSONAL_INFO_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
