import React from 'react';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <header>
      <nav className={styles.navWrapper}>
        <img alt='the company logo' src='/logo.png' />
        <ul className={styles.navList}>
          <span className={styles.bold}>
            <li className={styles.navItem}>
              <a className={styles.a} href='#'>
                Homepage
              </a>
            </li>
          </span>
          <li className={styles.navItem}>
            <a className={styles.a} href='#'>
              Portfolio
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.a} href='#'>
              Projects
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.a} href='#'>
              Blog
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.a} href='#'>
              Contact
            </a>
          </li>
        </ul>
        <button className={styles.navButton}>Place A Call</button>
      </nav>
    </header>
  );
};

export default Nav;
