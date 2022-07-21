import { createContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../assets/data/shop-data";
import {
  addCollectionAndDocsToDb,
  getCategoriesAndDocs,
} from "../utilities/firebase/firebase.util";

export const ProductsContext = createContext({
  productsMap: {},
});

export const ProductsProvider = ({ children }) => {
  const [productsMap, setProductsMap] = useState({});

  // useEffect(() => {
  //   const addCollectionAndDocs = async () => {
  //     await addCollectionAndDocsToDb("categories", SHOP_DATA);
  //   };
  //   addCollectionAndDocs();
  // }, []);
  useEffect(() => {
    const getCategories = async () => {
      const ProductsMap = await getCategoriesAndDocs();
      setProductsMap(ProductsMap);
    };
    getCategories();
  }, []);

  const value = { productsMap, setProductsMap };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
