import React from 'react';
import './Category.scss';
import { useSearch } from '../../context/searchCtx';

function Category({
  categoryName,
  // onCategoryChange,
  // categoryRef,

  ProductsQueryFunc,
  categoryId
}) {
  const {
    // queryRef,
    categoryRef,
    // onInputChange,
    onCategoryChange
  } = useSearch();
  return (
    <li
      className="categoryBtn"
      onClick={() => {
        onCategoryChange(categoryId);

        ProductsQueryFunc({
          variables: {
            input: {
              byCategory: categoryRef.current,
              // filter: queryRef.current,
              orderByName: 'asc'
            }
          }
        });
      }}
    >
      {categoryName}
    </li>
  );
}

export default Category;
