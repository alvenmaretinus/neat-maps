import React from 'react';
import styles from './Header.module.css'

const Header = ({ user, logout }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Neat Maps</h1>
      <div className={styles.user}>
        <div className={styles.type}>Email</div>
        <div className={styles.email}>{user.email}</div>
        <div className={styles.type}>ID</div>
        <div className={styles.id}>{user.id}</div>
      </div>
      <button className={styles.button} onClick={logout}>Logout</button>
    </header>
  );
}

export default Header;
