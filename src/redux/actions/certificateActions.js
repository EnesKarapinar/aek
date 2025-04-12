import * as actionTypes from "./actionTypes";

export function getCertificatesSuccess(certificates) {
  return {
    type: actionTypes.GET_CERTIFICATES_SUCCESS,
    payload: certificates,
  };
}

export function getCertificates() {
  return function (dispatch) {
    let url = "https://eneskarapinar.github.io/aek/api/certificates.json";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCertificatesSuccess(result)));
  };
}
