import React, { createContext, useContext, useEffect, useState } from 'react';

interface IsearchCtx {
  queryRef;
  categoryRef;
  selectedCategoryId;
  onInputChange: (val: string) => void;
  onCategoryChange: (val: string) => void;
  SelectedCategory: (categoryId: string) => void;
}
const searchCtx = createContext<IsearchCtx>({} as IsearchCtx);

interface SearchProviderProps {
  children: React.ReactNode;
}

const initialSearchQuery = localStorage.getItem('search-query')
  ? localStorage.getItem('search-query')
  : '';

const initialCategoryQuery = localStorage.getItem('category-query')
  ? localStorage.getItem('category-query')
  : '7e12a7bd-bac4-48c1-b47a-425d485452eb';

const initialSelectedCategory = localStorage.getItem('selected-category')
  ? localStorage.getItem('selected-category')
  : '';
export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [queryRef, setqueryRef] = useState(initialSearchQuery);
  const [categoryRef, setcategoryRef] = useState(initialCategoryQuery);
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialSelectedCategory);

  useEffect(() => {
    localStorage.setItem('category-query', categoryRef!);
  }, [categoryRef]);

  useEffect(() => {
    localStorage.setItem('search-query', queryRef!);
  }, [queryRef]);
  const onInputChange = (val: string) => {
    setqueryRef(val);
  };
  const onCategoryChange = (val: string) => {
    setcategoryRef(val);
  };

  const SelectedCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };
  useEffect(() => {
    localStorage.setItem('selected-category', selectedCategoryId!);
  }, [selectedCategoryId]);
  return (
    <searchCtx.Provider
      value={{
        SelectedCategory,
        selectedCategoryId,
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
