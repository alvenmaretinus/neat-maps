import React from 'react';
import { connect } from 'react-redux';
import FileUploader from './FileUploader';
import DataTypeTable from './DataTypeTable';
import { removeUser } from '../actions';

const Main = (props) => {
  return (
    <div>
      <div>{props.user.email}</div>
      <div>{props.user.id}</div>
      <button className="button" onClick={props.removeUser}>Logout</button>
      <FileUploader />
      {/* <DataTypeTable index={0} /> */}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { removeUser };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
