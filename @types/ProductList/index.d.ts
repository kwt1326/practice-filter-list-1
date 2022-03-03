declare module 'ProductList' {
  export namespace ProductListTypes {
    export type ProductData = {
      creator: string;
      id: string;
      imagePath: string;
      price: number;
      pricingOption: number;
      title: string;
    }
  }
}