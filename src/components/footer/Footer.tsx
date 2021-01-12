import React from 'react';
import SocialIcons from './SocialIcons';
import * as footerLinks from '../../constants/footer_links';
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
          {footerLinks.nav_links.map((footerLinks) => {
            return (
              <li className={styles.footerItem} key={footerLinks.id}>
                <a className={styles.a} href={footerLinks.link}>
                  {footerLinks.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button className={styles.footerButton}>Place A Call</button>
      </div>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
