import './SubHeader.scss';
import Category from '../Category/Category';
import { useQuery } from '@apollo/client';
import { _GetCategorys } from '../../gql/query/getCategorys';

import SearchBar from '../SearchBar/SearchBar';

import { useSearch } from '../../context/searchCtx';

export const SubHeader = ({}) => {
  const { SelectedCategory, selectedCategoryId } = useSearch();

  const { data, loading } = useQuery(_GetCategorys);
  if (loading) {
    return 'loading';
  }

  return (
    <div className="subHeader">
      <SearchBar />

      <ul>
        {data &&
          data.GET_CATEGORYS.map((cat) => (
            <Category
              key={cat.id}
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
