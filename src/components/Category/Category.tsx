import React from 'react';
import './Category.scss';
import { useSearch } from '../../context/searchCtx';

import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { useNavigate } from 'react-router-dom';

function Category({
  categoryName,

  categoryId
}) {
  const { onCategoryChange } = useSearch();

  const navigate = useNavigate();

  return (
    <li
      className="categoryBtn"
      onClick={() => {
        navigate('/search');
        onCategoryChange(categoryId);
      }}
    >
      {categoryName}
    </li>
  );
}

export default Category;
