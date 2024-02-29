import React, { useState } from 'react';
import './Category.scss';
import { useSearch } from '../../context/searchCtx';

import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { useNavigate } from 'react-router-dom';

function Category({
  categoryName,
  isSelected,
  categoryId,
  onCategoryChanges
}) {
  const { onCategoryChange } = useSearch();
  const navigate = useNavigate();

  return (
    <li
    className={`categoryBtn ${isSelected ? 'selected' : ''}`}
    
     
      onClick={() => {
        navigate('/search');
        onCategoryChange(categoryId);
        onCategoryChanges(categoryId)
      }}
    >
      {categoryName}
    </li>
  );
}

export default Category;
