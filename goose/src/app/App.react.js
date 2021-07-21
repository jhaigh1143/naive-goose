// @flow strict

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Paperbase from "./Paperbase.react";
import firebase from "./firebase";

const pages: Array<{|
  title: string,
  path: string,
  component: React$Node,
|}> = [
  {
    title: "Home",
    path: "/",
    component: <Paperbase />,
  },
  {
    title: "UseArs",
    path: "/users",
    component: <></>,
  },
];

export default function App(props: {| name: string |}): React$Node {
  return (
    <Router>
        <Switch>
          {pages.map(({ path, component }) => (
            <Route exact key={path} path={path}>
              {component}
            </Route>
          ))}
        </Switch>
    </Router>
  );
}
