import React, { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchBox.module.scss';

function SearchBox(props: {
  onSearchCallback: () => void
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('keyword') || '');

  const _onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, [])

  const _onSearch = useCallback(() => {
    if (!value) {
      searchParams.delete('keyword');
      return setSearchParams(searchParams);
    }
    if (searchParams.has('keyword')) {
      searchParams.set('keyword', value)
    } else {
      searchParams.append('keyword', value)
    }
    setSearchParams(searchParams)
    props.onSearchCallback()
  }, [props, searchParams, setSearchParams, value])

  const _onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      _onSearch();
    }
  }, [_onSearch])

  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Find the Items you're looking for"
        value={value}
        onChange={_onChange}
        onKeyDown={_onKeyDown}
      />
      <button className={styles.search_btn} onClick={_onSearch} />
    </div>
  )
}

export default SearchBox;
