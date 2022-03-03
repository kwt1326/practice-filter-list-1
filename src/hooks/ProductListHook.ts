import { toJS } from "mobx";
import { useCallback, useEffect, useState } from "react";
import { ProductListTypes } from "ProductList";
import ProductStore from "../store/service/product";

const NUM_PAGE_PER = 10;

export const useRequest = (store: ProductStore) => {
  const [data, setData] = useState<ProductListTypes.ProductData[]>([]);
  const fetchFunc = async () => {
    const responseData = await store?.findAllProducts();
    setData(responseData)
  }
  
  useEffect(() => {
    fetchFunc();
  }, [])

  return data
}

export const useFilter = (props: {
  prevData: ProductListTypes.ProductData[];
  cursor: number;
  store: ProductStore;
  searchParams: URLSearchParams;
}) => {
  const { cursor, store, searchParams, prevData } = props;
  const [result, setResult] = useState<ProductListTypes.ProductData[]>([]);
  const [prevCursor, setPrevCursor] = useState<number>(1);

  const filter = useCallback(async () => {
    const _result = await new Promise((resolve) => setTimeout(() => {
      const checks = searchParams.getAll('check');
      const keyword = searchParams.get('keyword');
      const newDatas = toJS(store?.getFilterProducts(checks, keyword));

      if (cursor === 1) {
        return resolve(newDatas.slice(0, NUM_PAGE_PER));
      }
      if (prevCursor === cursor) {
        return resolve(result);
      }

      const refresh = cursor === 1;
      const cache = refresh ? [] : prevData;
      const sliceStart = (cursor - 1) * NUM_PAGE_PER;
      const sliceEnd = cursor * NUM_PAGE_PER;

      setPrevCursor(cursor);
      resolve([...cache, ...newDatas.slice(sliceStart, sliceEnd)]);
    }, 100))

    setResult(_result as ProductListTypes.ProductData[]);
  }, [cursor, searchParams])

  useEffect(() => {
    setPrevCursor(cursor);
  }, [])

  useEffect(() => {
    filter();
  }, [filter])

  return result
}