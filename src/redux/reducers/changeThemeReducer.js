import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeThemeReducer(state = initialState.theme, action) {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      localStorage.setItem("theme", action.payload);
      return action.payload;
    default:
      return state;
  }
}
