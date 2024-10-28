import * as actionTypes from "./actionTypes";

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

export function addCategorySuccess(data) {
  return {
    type: actionTypes.ADD_CATEGORY_SUCCESS,
    payload: data,
  };
}

export function addCategory(){
  
}