import React from 'react';
import styles from './FileUploader.module.css'

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

  return (
    <div className={styles.file}>
      <input type="file" accept=".csv" onChange={onFileChange} />
      <span>Add or drop <strong>.csv</strong> file here</span>
    </div>
  );
}

export default FileUploader;
