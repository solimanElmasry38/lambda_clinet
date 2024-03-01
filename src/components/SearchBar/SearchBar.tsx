import { useQuery } from '@apollo/client';
import { Spinner } from '../Spinner/Spinner';
import { _GetProductsNames } from '../../gql/query/getProductsNames';
import { useSearch } from '../../context/searchCtx';
import './SearchBar.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
  const { queryRef, onInputChange } = useSearch();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { loading, data } = useQuery(_GetProductsNames, {
    variables: {
      input: {}
    },
    fetchPolicy: 'cache-and-network'
  });
  const navigate = useNavigate();

  if (loading) {
    return <Spinner />;
  }

  const onSearch = (ProductName) => {
    onInputChange(ProductName);
    setDropdownVisible(false);
    navigate('/search');
  };
  return (
    <div className="inpContainer">
      <form action="" className="search" method="GET">
        <input
          type="search"
          name=""
          autoComplete="off"
          value={queryRef}
          id="search"
          placeholder="Search...."
          onChange={(e) => {
            onInputChange(e.target.value);
            setDropdownVisible(true);
          }}
        />
        <button
          className="submit"
          onClick={() => {
            navigate('/search');
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div
        className="DropDown invisible-scrollbar"
        style={{
          display: isDropdownVisible ? 'block' : 'none'
        }}
      >
        {data.PRODUCTS_GET &&
          data.PRODUCTS_GET.filter((item) => {
            return queryRef && item.name.toLowerCase().startsWith(queryRef.toLowerCase());
          }).map((i) => (
            <div
              className="DropDownRow"
              key={i.name}
              onClick={() => {
                onSearch(i.name);
              }}
            >
              {i.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
