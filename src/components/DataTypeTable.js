import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTypeSelect from './DataTypeSelect';
import { addData } from '../actions';
import styles from './DataTypeTable.module.css'

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

  onSubmitButtonClick = () => {
    this.props.addData(this.props.data, this.state.dataTypeIndex);
    this.props.onResetData();
  }

  isSubmitButtonDisabled = () => {
    for (let type of this.state.dataTypeIndex) {
      if (!type) {
        return true;
      }  
    }
    return false;
    
  }

  render() {
    const { data, onResetData } = this.props;

    return (
      <React.Fragment>
        <div className={styles.buttons}>
          <button className={styles.reset} onClick={this.resetState}>Reset</button>
          <button 
            className={styles.submit}
            onClick={this.onSubmitButtonClick}
            disabled={this.isSubmitButtonDisabled()}>
            Submit
          </button>
          <button onClick={onResetData}>Re-upload</button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              { this.state.dataTypeIndex.map((value, index) => {
                return (
                  <td key={index}>
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
            { data.map(row => {
              return <tr key={row}>{ row.map(column => {
                return <td key={column}>{column}</td>
              }) }</tr>
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const addDispatchToProps = { addData };

export default connect(mapStateToProps, addDispatchToProps)(DataTypeTable);
