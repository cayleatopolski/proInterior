import React from 'react';
import styles from './footer.module.css';

const SocialIcons = () => {
  return (
    <div className={styles.iconWrapper}>
      <img
        className={styles.icons}
        src='./icons.png'
        alt='social media icons'
      />
    </div>
  );
};

export default SocialIcons;
