import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTypeSelect from './DataTypeSelect';

class DataTypeTable extends Component {
  constructor() {
    super();
    this.state = {
      types: ['ADDRESS', 'CITY', 'STATE', 'ZIPCODE', 'CATEGORY'],
      dataTypeIndex: [null, null, null, null, null]
    };
  }

  onSelectChange = (index, value) => {
    this.setState(state => {
      let newValue = [...state.dataTypeIndex];

      newValue[index] = value;
      return {
        types: state.types.filter(type => type !== value),
        dataTypeIndex: newValue
      };
    });
  };

  resetState = () => {
    this.setState({
      types: ['ADDRESS', 'CITY', 'STATE', 'ZIPCODE', 'CATEGORY'],
      dataTypeIndex: [null, null, null, null, null]
    });
  }

  typesToPass(index) {
    let types = [];

    if (this.state.dataTypeIndex[index]) {
      return [this.state.dataTypeIndex[index], ...this.state.types];
    }
    else {
      return [...this.state.types];
    }
  }

  selectedValue(index) {
    if (this.state.dataTypeIndex[index]) {
      return this.state.dataTypeIndex[index];
    }
    else {
      return 'default';
    }
  }

  isSelectDisabled(index) {
    return this.state.dataTypeIndex[index] !== null;
  }

  render() {
    const { index, user } = this.props;

    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              { user.csvData[index][0].map((value, index) => {
                return (
                  <td key={value}>
                    <DataTypeSelect
                      index={index}
                      types={this.typesToPass(index)}
                      value={this.selectedValue(index)}
                      disabled={this.isSelectDisabled(index)}
                      onSelectChange={this.onSelectChange} />
                  </td>
              )}) }
            </tr>
          </thead>
          <tbody>
            { user.csvData[index].map(row => {
              return <tr key={row}>{ row.map(column => {
                return <td key={column}>{column}</td>
              }) }</tr>
            })}
          </tbody>
        </table>
        <button onClick={this.resetState}>reset</button>
        <button>submit</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(DataTypeTable);
