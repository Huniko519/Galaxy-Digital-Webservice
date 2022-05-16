import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
