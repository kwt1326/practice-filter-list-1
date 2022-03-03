import { createContext } from "react";
import ProductStore from "./service/product";

export const ProductContext = createContext<ProductStore>(new ProductStore());

export const RootProvider = (props: { children: React.ReactNode }) => (
  <ProductContext.Provider value={new ProductStore()}>
    {props.children}
  </ProductContext.Provider>
)