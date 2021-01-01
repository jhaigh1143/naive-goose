// @flow strict
import React from "react";
import logo from "../_legacy/logo.svg";
import { StyleSheet, StyleResolver } from "style-sheet";
import LettersView from "./LettersView";

export default function Home(): React$Node {
  return (
    <div className="App">
      <header className={StyleResolver.resolve([styles.appHeader])}>
        <img
          src={logo}
          className={StyleResolver.resolve([styles.appLogo])}
          alt="logo"
        />
        <p className={StyleResolver.resolve([styles.rule])}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LettersView />
        <a
          className={StyleResolver.resolve([styles.appLink])}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LearAAAAn React
        </a>
      </header>
    </div>
  );
}

const styles = StyleSheet.create({
  appLogo: {
    height: "40vmin",
    pointerEvents: "none",
    animation: "App-logo-spin infinite 20s linear",
  },
  appHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  rule: {
    display: "block",
    backgroundColor: "orange",
    color: "green",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },
  appLink: {
    color: "#61dafb",
  },
});
