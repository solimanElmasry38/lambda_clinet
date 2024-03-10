import { useLazyQuery, useMutation } from '@apollo/client';

import Cookies from 'js-cookie';
import { _Add } from '../../gql/mutation/addToCart';

import { useToasts } from 'react-toast-notifications';
import { useEffect, useState } from 'react';
import { _IsProductAvailable } from '../../gql/query/isProductAvailable';
import { Spinner } from '../Spinner/Spinner';
export const AddToCartBtn = ({ id }) => {
  const { addToast } = useToasts();

  const [IsAvailableFunc, { data, loading }] = useLazyQuery(_IsProductAvailable);
  const [r, setR] = useState(true);

  const [ADD_TO_CART] = useMutation(_Add);

  const addProductToCart = async (id) => {
    await ADD_TO_CART({
      variables: {
        input: {
          Product_count: 1,
          Product_id: id,
          usr_id: Cookies.get('lambda_usr_id')
        }
      }
    })
      .then((res) => {
        // localStorage.setItem('shopping-cart-coutn', res.data.ADD_TO_CART.TotalProductInCart);

        setR(res.data.ADD_TO_CART.availability);
      })
      .catch((err) => {
        addToast(err.message, { appearance: 'error' });
      });
  };
  let counter = 0;
  useEffect(() => {
    IsAvailableFunc({
      variables: {
        input: {
          productId: id
        }
      }
    });
  }, [counter]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {data && r && data.IS_AVILABLE ? (
        <button
          className="item-cart-btn"
          onClick={async () => {
            await addProductToCart(id);
          }}>
          Add To Cart
          {r && data.IS_AVILABLE}
        </button>
      ) : (
        <button className="item-cart-btn disable">out of stock</button>
      )}
    </>
  );
};
