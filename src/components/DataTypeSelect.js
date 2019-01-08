import React from 'react';

const DataTypeSelect = ({ index, types, value, disabled, onSelectChange }) => {
  const handleSelectChange = event => onSelectChange(index, event.target.value);

  return (
    <select value={value} onChange={handleSelectChange} disabled={disabled}>
      <option value="default" disabled>Choose One</option>
      { types.map(type => <option key={type} value={type}>{type}</option>) }
    </select>
  );
};

export default DataTypeSelect;