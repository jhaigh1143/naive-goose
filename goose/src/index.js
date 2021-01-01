// @flow

import React from "react";
import ReactDOM from "react-dom";
import "./_legacy/index.css";
import App from "./app/App.react";
import reportWebVitals from "./_legacy/reportWebVitals";
import { StyleSheet, StyleResolver } from "style-sheet";

const styles = StyleSheet.create({
  app: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <div className={StyleResolver.resolve([styles.app])}>
      <App name="MyName" />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
