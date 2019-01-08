import React from 'react';
import { connect } from 'react-redux';
import { addCsvData } from '../actions';

const FileUploader = ({ addCsvData }) => {
  const onFileChange = event => {
    const fileReader = new FileReader();

    fileReader.readAsText(event.target.files[0]);
    fileReader.onloadend = async () => {
      let dataRows = fileReader.result.split(/[\r\n]+/);
      let data = await dataRows.map(row => {
        return row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g).map(column => column.replace(/['"]+/g, ''));
      });
      addCsvData(data);
    }
    event.target.value = '';
  }

  return <input type="file" accept=".csv" onChange={onFileChange} />;
}

const mapDispatchToProps = { addCsvData };

export default connect(null, mapDispatchToProps)(FileUploader);
