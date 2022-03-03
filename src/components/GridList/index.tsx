import React from 'react';
import styles from './GridList.module.scss';

function GridList(props: { children: React.ReactNode[] }) {
  return (
    <ul className={styles.container}>
      {props.children?.length > 0 && (
        props.children?.map((item: React.ReactNode, i: React.Key) => (
          <li key={i} className={styles.item_wrap}>{item}</li>
        ))
      )}
    </ul>
  )
}

export default GridList;
