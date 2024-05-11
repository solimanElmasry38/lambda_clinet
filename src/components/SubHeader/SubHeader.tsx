import './SubHeader.scss';
import Category from '../Category/Category';
import { useQuery } from '@apollo/client';
import { _GetCategorys } from '../../gql/query/getCategorys';

import SearchBar from '../SearchBar/SearchBar';

import { useSearch } from '../../context/searchCtx';

export const SubHeader = ({}) => {
  const { SelectedCategory, selectedCategoryId } = useSearch();

  const { data, loading ,error} = useQuery(_GetCategorys,{variables:{
    input:{

    }
  }});
  if (loading) {
    return 'loading';
  }
console.log(error)
console.log(data)
  return (
    <div className="subHeader">
      <SearchBar />

      <ul>
        {data &&
          data.GET_CATEGORYS.map((cat,index) => (
            <Category
              key={index}
              categoryName={cat.name}
              categoryId={cat.id}
              isSelected={cat.id === selectedCategoryId}
              SelectedCategory={SelectedCategory}
            />
          ))}
      </ul>
    </div>
  );
};
