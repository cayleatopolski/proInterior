import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>Interior Styling</h1>
      <button className={styles.headerWrapper}>Our Projects</button>
    </div>
  );
};

export default Header;
