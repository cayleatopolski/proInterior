import React from 'react';
import styles from './tile.module.css';
import Tile from './Tile';

const Tiles = () => {
  return (
    <div className={styles.tileWrapper}>
      <h2 className={styles.title}>Browse Ideas by Room</h2>
      <div className={styles.grid}>
        <Tile imgUrl='./kitch.png' room='Kitchen' text='A kitchen' />
        <Tile imgUrl='./bath.png' room='Bath' text='A bathroom' />
        <Tile imgUrl='./bedroom.png' room='Bedroom' text='A bedroom' />
        <Tile imgUrl='./living.png' room='Living' text='A living space' />
        <Tile imgUrl='./dining.png' room='Dining' text='A dining space' />
        <Tile imgUrl='./kids.png' room='Kids' text='A childs room' />
      </div>
    </div>
  );
};

export default Tiles;
