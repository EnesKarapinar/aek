import * as actionTypes from "./actionTypes";

// export function changeCategory(category) {
//   return {
//     type: actionTypes.CHANGE_CATEGORY,
//     payload: category,
//   };
// }

export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function getCategories() {
  return function (dispatch) {
    let url = "https://eneskarapinar.github.io/aek/api/categories.json";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
