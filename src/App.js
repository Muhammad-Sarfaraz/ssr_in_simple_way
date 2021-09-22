import React from "react";
import { StaticRouter, Switch, Route, Link } from "react-router-dom";

import HomeOne from "./components/home001";
import HomeTwo from "./components/home002";
import HomeThree from "./components/home003";
import NotFoundRoute from "./components/NotFoundRoute";

function App() {
  return (
    <StaticRouter>
      <div>
        <h1>Hello there</h1>
        <li>
          <ul>
            <Link to="/home001">
              <h5>Home One</h5>
            </Link>
          </ul>
          <ul>
            <Link to="/home002">
              <h5>Home Two</h5>
            </Link>
          </ul>
          <ul>
            <Link to="/home003">
              <h5>Home Three</h5>
            </Link>
          </ul>
        </li>
      </div>
      <Switch>
        <Route path="/" exact>
          <HomeOne />
        </Route>
        <Route path="/home001" exact>
          <HomeOne />
        </Route>
        <Route path="/home002" exact>
          <HomeTwo />
        </Route>
        <Route path="/home003" exact>
          <HomeThree />
        </Route>
        {/* The NotFoundRoute route */}
        <Route path="*">
          <NotFoundRoute />
        </Route>
      </Switch>
    </StaticRouter>
  );
}

export default App;
