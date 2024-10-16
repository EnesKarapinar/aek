import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code> src / App.js </code> and save to reload.
          </p>
          <Link to="deneme">Learn React</Link>
        </header>
      </div>
    );
  }
}
