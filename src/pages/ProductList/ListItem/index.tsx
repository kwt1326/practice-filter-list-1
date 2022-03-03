import React from 'react';
import { ProductListTypes } from 'ProductList';
import styles from './ListItem.module.scss';

function ListItem(props: { data: ProductListTypes.ProductData }) {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.img_wrapper}>
          <img src={props.data.imagePath} alt={'img_product_thumbnail'} />
        </div>
        <article className={styles.contents}>
          <div className={styles.title}>
            <span>{props.data.title}</span>
          </div>
          <div>
            <span>{props.data.creator}</span>
            <span> | </span>
            <span>{`$${props.data.price}`}</span>
          </div>
        </article>
      </div>
      <div className={styles.spacing_box} />
    </div>
  )
}

export default React.memo(ListItem);