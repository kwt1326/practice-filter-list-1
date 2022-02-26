import React from 'react';
import Filter from '../../components/Filter';
import GridList from '../../components/GridList';

import styles from './ProductList.module.scss';

function ProductList(params: any) {
  return (
    <div className={styles.container}>
      <Filter />
      <GridList />
    </div>
  )
}

export default ProductList;