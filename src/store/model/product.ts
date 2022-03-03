import { computed, extendObservable } from "mobx";
import { ProductListTypes } from "ProductList";

export class ProductModel {
  _product: ProductListTypes.ProductData | null = null;

  constructor(data: ProductListTypes.ProductData) {
    extendObservable(this, data);
    extendObservable(this, {
      data: computed
    })
  }

  get data() {
    return this._product;
  }
}