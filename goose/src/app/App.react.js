// @flow strict

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home.react";
import BrowseUsers from "./userfeed/BrowseUsers.react";

const pages: Array<{|
  title: string,
  path: string,
  component: React$Node,
|}> = [
  {
    title: "Home",
    path: "/",
    component: <Home />,
  },
  {
    title: "Users",
    path: "/users",
    component: <BrowseUsers />,
  },
];

export default function App(props: {| name: string |}): React$Node {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {pages.map(({ path, title }) => (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {pages.map(({ path, component }) => (
            <Route exact key={path} path={path}>
              {component}
            </Route>
          ))}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
