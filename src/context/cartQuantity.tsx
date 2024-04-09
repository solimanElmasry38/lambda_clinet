import React, { createContext, useContext, useState } from 'react';

interface IcartQuantityCtx {
    cartQuantity, setcartQuantity
}
const cartQuantityCtx = createContext<IcartQuantityCtx>({} as IcartQuantityCtx);

interface SearchProviderProps {
  children: React.ReactNode;
}


export const CartQuantityProvider: React.FC<SearchProviderProps> = ({ children }) => {
  
  const [cartQuantity, setcartQuantity] = useState(201);

//   useEffect(() => {
//     localStorage.setItem('category-query', categoryRef!);
//   }, [categoryRef]);

//   useEffect(() => {
//     localStorage.setItem('search-query', queryRef!);
//   }, [queryRef]);
//   const onInputChange = (val: string) => {
//     setqueryRef(val);
//   };
//   const onCategoryChange = (val: string) => {
//     setcategoryRef(val);
//   };

//   const SelectedCategory = (categoryId) => {
//     setSelectedCategoryId(categoryId);
//   };
//   useEffect(() => {
//     localStorage.setItem('selected-category', selectedCategoryId!);
//   }, [selectedCategoryId]);
  return (
    <cartQuantityCtx.Provider
      value={{
        cartQuantity, setcartQuantity
      }}
    >
      {children}
    </cartQuantityCtx.Provider>
  );
};

export const useCartQuantity = () => {
  return useContext(cartQuantityCtx);
};
