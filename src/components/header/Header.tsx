import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Interior Styling</h1>
        <button className={styles.headerButton}>Our Projects</button>
      </div>
    </div>
  );
};

export default Header;
