import React from 'react';
import Header from '../Header';
import { ContentWrapTypes } from 'ContentWrap';
import styles from './ContentWrap.module.scss';

function ContentWrap(props: ContentWrapTypes.IProps) {
  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.contents}>
        {props.children}
      </section>
    </section>
  )
}

export default ContentWrap;
