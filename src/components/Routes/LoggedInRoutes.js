import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Main from '../Main';
import Logout from '../Logout';

class LoggedInRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Logout" exact component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default LoggedInRoutes;
