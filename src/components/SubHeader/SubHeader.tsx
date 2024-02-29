import './SubHeader.scss';
import Category from '../Category/Category';
import { useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import { _GetCategorys } from '../../gql/query/getCategorys';

import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';

export const SubHeader = ({}) => {
  const initialSelectedCategory = localStorage.getItem('selected-category')
  ? localStorage.getItem('selected-category')
  : '';
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialSelectedCategory);
  useEffect(() => {
    localStorage.setItem('selected-category', selectedCategoryId!);
  }, [selectedCategoryId]);

  const { data, loading } = useQuery(_GetCategorys, {
    variables: {
      input: {
        usr_id: Cookies.get('lambda_usr_id'),
        usr_token: Cookies.get('lambda_usr_token')
      }
    }
  });
  if (loading) {
    return 'loading';
  }
  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="subHeader">
        <SearchBar/>
    
      <ul>
        {data.GET_CATEGORYS.map((cat) => (
          <Category 
          key={cat.id}
          categoryName={cat.name}
          categoryId={cat.id}
          isSelected={cat.id === selectedCategoryId}
          onCategoryChanges={handleCategoryChange}
          />
        ))}
      </ul>
    </div>
  );
};
