import React from 'react';
import { FilterTypes } from 'Filter';
import styles from './FilterCheckBox.module.scss';

function FilterCheckBox(props: FilterTypes.FilterCheckBoxProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="checkbox"
        checked={props.checked}
        onChange={props.onClick}
      />
      <label
        className={styles.label}
        htmlFor="checkbox"
      >{props.label}</label>
    </div>
  )
}

export default FilterCheckBox;
