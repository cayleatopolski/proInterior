import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.title}>Interior Styling</h1>
      <button>Our Projects</button>
    </div>
  );
};

export default Header;
