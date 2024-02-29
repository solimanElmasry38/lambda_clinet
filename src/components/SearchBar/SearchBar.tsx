import { useQuery } from '@apollo/client';
import { Spinner } from '../Spinner/Spinner';
import { _GetProductsNames } from '../../gql/query/getProductsNames';
import { useSearch } from '../../context/searchCtx';
import './SearchBar.scss';
function SearchBar() {
  const { queryRef, onInputChange } = useSearch();

  const { loading, data } = useQuery(_GetProductsNames, {
    variables: {
      input: {}
    },
    fetchPolicy: 'cache-and-network'
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="inpContainer">
      <input
        type="search"
        name=""
        value={queryRef}
        id="search"
        placeholder="Search...."
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
      <div className="DropDown invisible-scrollbar">
        {data.PRODUCTS_GET &&
          data.PRODUCTS_GET.filter((item) => {
            return queryRef && item.name.toLowerCase().startsWith(queryRef.toLowerCase());
          }).map((i) => <div className="DropDownRow">{i.name}</div>)}
      </div>
    </div>
  );
}

export default SearchBar;
