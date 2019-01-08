import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NotLoggedInRoutes from './NotLoggedInRoutes';
import LoggedInRoutes from './LoggedInRoutes';
import { getUser } from '../../actions';

class Routes extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { user } = this.props;

    return (user ? (
      <Route component={LoggedInRoutes} />
      ) : (
      <Route component={NotLoggedInRoutes} />
      ))
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
