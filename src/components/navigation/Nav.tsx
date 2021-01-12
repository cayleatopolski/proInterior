import React from 'react';
import * as navLinks from '../../constants/nav_links';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <header>
      <nav className={styles.navWrapper}>
        <img alt='the company logo' src='/logo.png' />
        <ul className={styles.navList}>
          {navLinks.nav_links.map((linkItem) => {
            return (
              <li className={styles.navItem} key={linkItem.id}>
                <a className={styles.a} href={linkItem.link}>
                  {linkItem.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button className={styles.navButton}>Place A Call</button>
      </nav>
    </header>
  );
};

export default Nav;
