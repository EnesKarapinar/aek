import * as actionTypes from "./actionTypes";

export function getProjectsSuccess(projects) {
  return {
    type: actionTypes.GET_PROJECTS_SUCCESS,
    payload: projects,
  };
}

export function getProjects() {
  return function (dispatch) {
    let url = "https://eneskarapinar.github.io/aek/api/projects.json";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProjectsSuccess(result)));
  };
}
