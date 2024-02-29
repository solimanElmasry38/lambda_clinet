import './SubHeader.scss';
import Category from '../Category/Category';
import { useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import { _GetCategorys } from '../../gql/query/getCategorys';
import { useSearch } from '../../context/searchCtx';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export const SubHeader = ({}) => {
  const navigate = useNavigate();

  const { queryRef, onInputChange } = useSearch();

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
     
        <SearchBar/>
        <button
          className="submit"
          onClick={() => {
            navigate('/search');
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <ul>
        {data.GET_CATEGORYS.map((cat) => (
          <Category categoryName={cat.name} categoryId={cat.id} key={cat.name} />
        ))}
      </ul>
    </div>
  );
};
