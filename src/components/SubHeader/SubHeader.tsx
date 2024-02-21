import './SubHeader.scss';
import Category from '../Category/Category';
import { useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import { _GetCategorys } from '../../gql/query/getCategorys';
import { useSearch } from '../../context/searchCtx';

export const SubHeader = ({
  // categoryRef,
  // queryRef,
  // onInputChange,
  // onCategoryChange,
  ProductsQueryFunc
}) => {
  const {
    queryRef,

    onInputChange
  } = useSearch();
  // console.log(queryRef.current.value)
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

  return (
    <div className="subHeader">
      <form action="" className="search" method="GET">
        <input
          type="search"
          name=""
          // value={empty}
          id="search"
          ref={queryRef}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <button
          className="submit"
          type="button"
          onClick={() => {
            console.log('clicked');

            ProductsQueryFunc({
              variables: {
                input: {
                  // byCategory:categoryRef.current,
                  filter: queryRef.current,
                  orderByName: 'asc'
                }
              }
            });
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <ul>
        {data.GET_CATEGORYS.map((cat) => (
          <Category
            categoryName={cat.name}
            categoryId={cat.id}
            // onCategoryChange={onCategoryChange}//
            // categoryRef={categoryRef}
            // categoryRef={categoryRef}
            // queryRef={queryRef}
            key={cat.name}
            ProductsQueryFunc={ProductsQueryFunc}
          />
        ))}
      </ul>
    </div>
  );
};
