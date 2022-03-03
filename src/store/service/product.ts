import { action, computed, makeAutoObservable, observable, toJS } from "mobx";
import { ProductListTypes } from "ProductList";
import { ProductRepository } from "../repository/product";

export class ProductStore {
  _products: ProductListTypes.ProductData[] = [];
  
  constructor() {
    makeAutoObservable(this, {
      _products: observable,
      products: computed,
      findAllProducts: action,
      setProducts: action,
    });
  }

  get products() {
    return this._products;
  }

  getFilterProducts(indexs: string[], keyword: string | null) {
    if (indexs.length === 0 && !keyword) return this._products;

    const _keyword = keyword?.toLowerCase();
    return this._products.filter((item: ProductListTypes.ProductData) => {
      const _item = toJS(item);
      // check 된 옵션이 없을 경우 모든 데이터 대상
      let equalCheck = indexs.length === 0 || indexs.includes(String(_item.pricingOption));

      // keyword 존재시 keyword 해당하는 값 필터링
      if (_keyword) {
        return equalCheck && (
          _item.creator.toLowerCase().includes(_keyword) ||
          _item.title.toLowerCase().includes(_keyword)
        );
      }
      return equalCheck;
    })
  }

  setProducts(products: ProductListTypes.ProductData[]) {
    this._products = products;
  }

  async findAllProducts() {
    const responseData = await ProductRepository.findAllProducts();
    this.setProducts(responseData);
    return this._products;
  }
}

export default ProductStore;