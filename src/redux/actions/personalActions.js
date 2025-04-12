import * as actionTypes from "./actionTypes";

export function getPersonalInfoSuccess(pi) {
  return {
    type: actionTypes.GET_PERSONAL_INFO_SUCCESS,
    payload: pi,
  };
}

export function getPersonalInfo() {
  return async function (dispatch) {
    let url =
      "https://eneskarapinar.github.io/aek/api/personalInformation.json";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      dispatch(getPersonalInfoSuccess(result));
    } catch (error) {}
  };
}
