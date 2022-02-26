import React from 'react';
import Header from '../Header';
import { IProps } from './ContentWrap';
import styles from './ContentWrap.module.scss';

function ContentWrap(props: IProps) {
  return (
    <section className={styles.container}>
      <Header />
      <section>
        {props.children}
      </section>
    </section>
  )
}

export default ContentWrap;
