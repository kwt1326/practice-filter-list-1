import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ProductListTypes } from 'ProductList';
import { ProductContext } from '../../store';
import { ProductStore } from '../../store/service/product';
import { useStore } from '../../hooks/UseStore';
import { useFilter, useRequest } from '../../hooks/ProductListHook';
import { useIntersection } from '../../hooks/UseIntersection';

import Filter from '../../components/Filter';
import GridList from '../../components/GridList';
import SearchBox from '../../components/SearchBox';
import ContentWrap from '../../components/ContentWrap';
import ListItem from './ListItem';

import styles from './ProductList.module.scss';

function ProductList() {
  const store = useStore<ProductStore>(ProductContext);
  useRequest(store);
  
  const [searchParams] = useSearchParams();
  const [cursor, setCursor] = useState<number>(1);
  const [data, setData] = useState<ProductListTypes.ProductData[]>([]);

  const filterData = useFilter({
    prevData: data,
    cursor,
    store,
    searchParams,
  });

  const nextPage = useCallback(() => new Promise((resolve) => setTimeout(() => {
    setCursor(prevCursor => prevCursor + 1); resolve({});
  }, 1000)), []);

  const [, setObserverRef] = useIntersection(async (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => {
    observer.unobserve(entry.target);
    await nextPage();
    observer.observe(entry.target);
  });
  
  useLayoutEffect(() => {
    setData(filterData);
  }, [filterData])

  /* render component */

  const getProductItems = () => data?.map((item: ProductListTypes.ProductData, i: React.Key) => <ListItem key={i} data={item} />)

  const ItemCount = () => <div className={styles.item_count_wrap}>{`${data?.length} items`}</div>

  const SpacingBox = () => <div className={styles.spacing_box_horizontal} />

  return (
    <ContentWrap>
      <SearchBox onSearchCallback={() => setCursor(1)} />
      <SpacingBox />
      <Filter
        checkItemsLabel={'Pricing Options'}
        checkItems={['Paid', 'Free', 'View Only']}
        onCheckChange={() => setCursor(1)}
        onReset={() => setCursor(1)}
      />
      <ItemCount />
      <GridList children={getProductItems()} />
      <div
        ref={setObserverRef as React.LegacyRef<HTMLDivElement>}
        className={styles.observer}
      />
    </ContentWrap>
  )
}

export default observer(ProductList);