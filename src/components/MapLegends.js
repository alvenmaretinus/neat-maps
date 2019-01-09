import React from 'react';
import styles from './MapLegends.module.css';

const MapLegends = ({ data }) => {
  return (
    <div className={styles.container}>
      { data.map((unit, index) => (
        <div className={styles.card} key={index}>  
          <svg className={styles.icon} style={{fill: unit.color}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12,2C8.134,2,5,5.134,5,9c0,5,7,13,7,13s7-8,7-13C19,5.134,15.866,2,12,2z M12,11.5c-1.381,0-2.5-1.119-2.5-2.5 c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C14.5,10.381,13.381,11.5,12,11.5z" />
          </svg>
          <span>{unit.name}</span>
        </div>
      )) }
    </div>
  );
};

export default MapLegends;
