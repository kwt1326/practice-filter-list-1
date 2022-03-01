import React from 'react';
import styles from './GridList.module.scss';

function GridList(props: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default GridList;
