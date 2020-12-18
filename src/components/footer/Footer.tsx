import React from 'react';
import SocialIcons from './SocialIcons';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <img
          className={styles.img}
          alt='the company logo'
          src='/darkLogo.png'
        />
        <ul className={styles.footerList}>
          <span className={styles.bold}>
            <li className={styles.footerItem}>
              <a className={styles.a} href='#'>
                Homepage
              </a>
            </li>
          </span>
          <li className={styles.footerItem}>
            <a className={styles.a} href='#'>
              Portfolio
            </a>
          </li>
          <li className={styles.footerItem}>
            <a className={styles.a} href='#'>
              Projects
            </a>
          </li>
          <li className={styles.footerItem}>
            <a className={styles.a} href='#'>
              Blog
            </a>
          </li>
          <li className={styles.footerItem}>
            <a className={styles.a} href='#'>
              Contact
            </a>
          </li>
        </ul>
        <button className={styles.footerButton}>Place A Call</button>
      </div>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
