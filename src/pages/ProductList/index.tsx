import React from 'react';
import { useQuery } from 'react-query';
import { ProductData } from './ProductList';
import Filter from '../../components/Filter';
import GridList from '../../components/GridList';
import ListItem from './ListItem';

import styles from './ProductList.module.scss';

function ProductList() {
  const { isLoading, data, error } = useQuery(
    'productListData', () => fetch('https://closet-sample.azurewebsites.net/api/data')
      .then(res => res.json())
  )

  if (error) { return <span>{'Fetching Error'}</span> }

  const ProductList = () => {
    if (isLoading) {
      return <div>{'Loading...'}</div>
    }
    if (!data) {
      return <div>{'Fetching Failed!'}</div>
    }
    return <GridList children={data.map((item: ProductData) => <ListItem data={item} />)} />
  }

  return (
    <div className={styles.container}>
      <Filter />
      <ProductList />
    </div>
  )
}

export default ProductList;