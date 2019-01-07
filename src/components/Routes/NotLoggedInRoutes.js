import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from '../Login';

const NotLoggedInRoutes = (props) => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default NotLoggedInRoutes;
