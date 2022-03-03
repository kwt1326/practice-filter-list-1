import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FilterTypes } from 'Filter';
import FilterCheckBox from './FilterCheckBox';
import styles from './Filter.module.scss';

const ResetButton = React.memo((props: FilterTypes.FilterResetBtnProps) => (
  <button
    className={styles.reset_button}
    onClick={props.onClick}
  >{'RESET'}</button>
))

function Filter(props: FilterTypes.FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const _onCheckBoxClick = useCallback((i: number) => {
    const value = String(i);
    const checkParams = searchParams.getAll('check');

    if (checkParams.includes(value)) {
      searchParams.delete('check');

      const filter = checkParams.filter(_value => _value !== value);
      for (const val of filter) {
        searchParams.append('check', val);
      }
    } else {
      searchParams.append('check', value);
    }
    setSearchParams(searchParams)
    props.onCheckChange(i)
  }, [props, searchParams, setSearchParams]);

  const _onResetBtnClick = useCallback(() => {
    props.onReset();
    searchParams.delete('check');
    setSearchParams(searchParams);
  }, [props, searchParams, setSearchParams])

  return (
    <div className={styles.container}>
      <div className={styles.check_options_wrap}>
        <div className={styles.label}>{props.checkItemsLabel}</div>
        <div className={styles.checkbox_list_wrap}>
          {props.checkItems.map((item: string, i: React.Key) => (
            <FilterCheckBox
              key={i}
              label={item}
              checked={searchParams.getAll('check').includes(String(i))}
              onClick={() => _onCheckBoxClick(Number(i))}
            />
          ))}
        </div>
      </div>
      <ResetButton onClick={_onResetBtnClick} />
    </div>
  )
}

export default Filter;
