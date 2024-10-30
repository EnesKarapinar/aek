import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/root/App";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import "./css/main.css";
import "./js/app.js";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </Router>
);
