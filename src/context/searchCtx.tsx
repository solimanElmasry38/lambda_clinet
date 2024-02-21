import React, { createContext, useContext, useRef, MutableRefObject } from 'react';

interface IsearchCtx {
  queryRef: MutableRefObject<string>;
  categoryRef: MutableRefObject<string>;
  onInputChange: (val: string) => void;
  onCategoryChange: (val: string) => void;
  //   ProductsQueryFunc:()=>void
}
const searchCtx = createContext<IsearchCtx>({} as IsearchCtx);

interface SearchProviderProps {
  children: React.ReactNode;
}
export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const queryRef = useRef('');
  const categoryRef = useRef('');

  const onInputChange = (val: string) => {
    queryRef.current = val;
  };
  const onCategoryChange = (val: string) => {
    categoryRef.current = val;
  };

  //   const ProductsQueryFunc=()=>{

  //   }
  return (
    <searchCtx.Provider
      value={{
        queryRef,
        categoryRef,
        onInputChange,
        onCategoryChange
      }}
    >
      {children}
    </searchCtx.Provider>
  );
};

export const useSearch = () => {
  return useContext(searchCtx);
};
