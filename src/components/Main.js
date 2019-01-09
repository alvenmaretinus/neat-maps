import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileUploader from './FileUploader';
import DataTypeTable from './DataTypeTable';
import Map from './MapContainer';
import { removeUser, removeData, getData } from '../actions';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      csvData: [],
      activeMapIndex: 0
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  onFileLoad = data => {
    this.setState({
      csvData: data
    });
  };

  onResetData = () => {
    this.setState({
      csvData: []
    });
  };

  logout = () => {
    this.props.removeUser();
    this.props.removeData();
  };

  onSelectMapClick = index => {
    this.setState({
      activeMapIndex: index
    });
  };

  render() {
    const { user, data } = this.props;

    return (
      <div>
        <div>{user.email}</div>
        <div>{user.id}</div>
        <button className="button" onClick={this.logout}>Logout</button>
        { this.state.csvData.length === 0 && <FileUploader onFileLoad={this.onFileLoad} /> }
        { this.state.csvData.length > 0 && <DataTypeTable data={this.state.csvData} onResetData={this.onResetData} /> }
        { data.length > 0 && data.map((list, index) =>
          <button
            key={index}
            disabled={this.state.activeMapIndex === index}
            onClick={() => this.onSelectMapClick(index)}
          >
            {index}
          </button>
        ) }
        { data.length > 0 && <Map data={data[this.state.activeMapIndex]} /> }
      </div>
    );
  }
}

const mapStateToProps = ({ user, data }) => ({ user, data });

const mapDispatchToProps = { removeUser, removeData, getData };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
