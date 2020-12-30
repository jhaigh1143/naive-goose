// @flow
import React from "react";
import logo from "./logo.svg";
import { StyleSheet, StyleResolver } from "style-sheet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LettersView from "./LettersView";

function Home() {
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

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

type Props = {
  name: string,
};
function App(props: Props): React$Node {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                {props.name} {2 + 3}
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
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

export default App;
