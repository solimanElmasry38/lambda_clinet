import { useMutation, useQuery } from '@apollo/client';
import { _GetWishList } from '../../gql/query/getWishList';
import Cookies from 'js-cookie';
import { Spinner } from '../../components/Spinner/Spinner';
import VerProductCard from '../../components/VerProductCard/VerProductCard';
import './wishList.scss';
import WishListCard from '../../components/WishListCard/WishListCard';
import { _RemoveFromWishList } from '../../gql/mutation/removeFromWishList';
export const WishList = () => {
  const wishListQuery = useQuery(_GetWishList, {
    variables: {
      input: {
        usr_id: Cookies.get('lambda_usr_id')
      }
    }
  });
  const [removeFromWishList, removeFromWishListMut] = useMutation(_RemoveFromWishList);
  if (wishListQuery.loading || removeFromWishListMut.loading) {
    return <Spinner />;
  }
  console.log(wishListQuery.data);
  return (
    <div className="wishListSec">
      <div className="wishListContainer">
        {wishListQuery.data
          ? wishListQuery.data.GET_WISH_LIST.map((item) => (
              <WishListCard item={item} key={item.id}>
                <i
                  className="fa-solid fa-trash"
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => {
                    removeFromWishList({
                      variables: {
                        input: {
                          Product_id: item.id,
                          usr_id: Cookies.get('lambda_usr_id')
                        }
                      }
                    });

                    window.location.reload();
                  }}></i>
              </WishListCard>
            ))
          : null}
      </div>
    </div>
  );
};
