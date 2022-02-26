import React from 'react';
import ListItem from './ListItem';
import styles from './GridList.module.scss';

function GridList() {
  return (
    <div className={styles.container}>
      <ListItem />
      GridList Test
    </div>
  )
}

export default GridList;
