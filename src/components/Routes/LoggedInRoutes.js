import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Main from '../Main';

class LoggedInRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default LoggedInRoutes;
