import * as actionTypes from "./actionTypes";

export const changeTheme = (theme) => ({
  type: actionTypes.CHANGE_THEME,
  payload: theme,
});
