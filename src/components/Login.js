import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import neat from '../apis/neat';
import styles from './Login.module.css'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMsg: ''
    };
  }

  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  login = event => {
    event.preventDefault();

    neat.post('/auth', `email=${this.state.email}&password=${this.state.password}`)
      .then(response => {
        this.props.setUser(response.data);
      })
      .catch(error => {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              this.setState({ errorMsg: 'Bad request' });
              break;
            case 401:
              this.setState({ errorMsg: 'Wrong credentials' });
              break;
            case 429:
              this.setState({ errorMsg: 'Too many requests, try again later' });
              break;
            case 500:
              this.setState({ errorMsg: 'Internal server error' });
              break;
            case 503:
              this.setState({ errorMsg: 'Server offline, try again later' });
              break;
            default:
              this.setState({ errorMsg: 'Oops, something went wrong' });
          }
        }
        else {
          this.setState({ errorMsg: 'Check your internet connection' });
        }
      })
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.heading}>Neat Maps</h1>
          <form className={styles.form} onSubmit={this.login}>
            <input className={styles.input} type="text" placeholder="email" value={this.state.email} onChange={this.onEmailChange} autoFocus />
            <input className={styles.input} type="password" placeholder="password" value={this.state.password} onChange={this.onPasswordChange} />
            <span className={styles.error}>{this.state.errorMsg}</span>
            <button className={styles.button} type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = { setUser };

export default connect(null, mapDispatchToProps)(Login);
