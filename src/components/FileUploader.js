import React from 'react';

const FileUploader = ({ onFileLoad }) => {
  const onFileChange = event => {
    const fileReader = new FileReader();

    fileReader.readAsText(event.target.files[0]);
    fileReader.onloadend = async () => {
      let dataRows = fileReader.result.split(/[\r\n]+/);
      let data = await dataRows.map(row => {
        return row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g).map(column => column.replace(/['"]+/g, ''));
      });
      onFileLoad(data);
    }
  }

  return <input type="file" accept=".csv" onChange={onFileChange} />;
}

export default FileUploader;
