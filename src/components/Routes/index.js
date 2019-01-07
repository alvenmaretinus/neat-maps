import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NotLoggedInRoutes from './NotLoggedInRoutes';
import LoggedInRoutes from './LoggedInRoutes';
import { initialGetUser } from '../../actions';

class Routes extends Component {
  componentDidMount() {
    this.props.initialGetUser();
  }
  
  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        { user ? (
            <Route component={LoggedInRoutes} />
          ) : (
            <Route component={NotLoggedInRoutes} />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = { initialGetUser };

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
