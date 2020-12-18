import React from 'react';
import styles from './tile.module.css';

const Tile = (props: any) => {
  return (
    <div className={styles.gridItem}>
      <img className={styles.tileImg} src={props.imgUrl} alt={props.text} />
      <button className={styles.button}>{props.room}</button>
    </div>
  );
};

export default Tile;
