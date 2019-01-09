import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileUploader from './FileUploader';
import DataTypeTable from './DataTypeTable';
import { removeUser, removeData, getData } from '../actions';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      csvData: []
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  onFileLoad = data => {
    this.setState({
      csvData: data
    });
  }

  onResetData = () => {
    this.setState({
      csvData: []
    });
  }

  logout = () => {
    this.props.removeUser();
    this.props.removeData();
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <div>{user.email}</div>
        <div>{user.id}</div>
        <button className="button" onClick={this.logout}>Logout</button>
        { this.state.csvData.length === 0 && <FileUploader onFileLoad={this.onFileLoad} /> }
        { this.state.csvData.length > 0 && <DataTypeTable data={this.state.csvData} onResetData={this.onResetData} /> }
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { removeUser, removeData, getData };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
