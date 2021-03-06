import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import FileUploader from './FileUploader';
import DataTypeTable from './DataTypeTable';
import Map from './MapContainer';
import { removeUser, removeData, getData } from '../actions';
import styles from './Main.module.css';

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
      <div className={styles.wrapper}>
        <Header user={user} logout={this.logout}></Header>
        <div className={styles.content}>
          { this.state.csvData.length === 0 && <FileUploader onFileLoad={this.onFileLoad} /> }
          { this.state.csvData.length > 0 && <DataTypeTable data={this.state.csvData} onResetData={this.onResetData} /> }
          <div className={styles.mapButtons}>
            { data.length > 0 && data.map((list, index) =>
              <button
                key={index}
                disabled={this.state.activeMapIndex === index}
                onClick={() => this.onSelectMapClick(index)}
              >
                {index+1}
              </button>
            ) }
          </div>
          { data.length > 0 && <Map data={data[this.state.activeMapIndex]} /> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, data }) => ({ user, data });

const mapDispatchToProps = { removeUser, removeData, getData };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
