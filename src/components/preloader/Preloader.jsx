import React, { Component } from "react";

export default class Preloader extends Component {
  render() {
    return (
      <div id="loader-container">
        <div id="loader">
          <div id="circles"></div>
        </div>
      </div>
    );
  }
}
