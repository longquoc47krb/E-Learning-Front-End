import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./services/i18n";
import "./styles/common/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
