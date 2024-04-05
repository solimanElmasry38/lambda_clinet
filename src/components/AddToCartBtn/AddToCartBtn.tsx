import { useLazyQuery, useMutation } from '@apollo/client';

import Cookies from 'js-cookie';
import { _Add } from '../../gql/mutation/addToCart';

import { useEffect, useState } from 'react';
import { _IsProductAvailable } from '../../gql/query/isProductAvailable';
import { Spinner } from '../Spinner/Spinner';
import { _GetCartCount } from '../../gql/query/getCartCount';

export const AddToCartBtn = ({ id ,onCartCountUpdate}) => {
 


  const [IsAvailableFunc, { data, loading }] = useLazyQuery(_IsProductAvailable);
  const [productCountFunc, {  loading:productCountloading }] = useLazyQuery(_GetCartCount);

  
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
       
        onCartCountUpdate(res.data.ADD_TO_CART.cartLength)
        localStorage.setItem('cartCount-query',res.data.ADD_TO_CART.cartLength)

        setR(res.data.ADD_TO_CART.availability);
      })
      .catch((err) => {
        console.log(err)
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
  if (productCountloading) {
    return <Spinner />;
  }


  return (
    <>
      {data && r && data.IS_AVILABLE ? (
        <button
          className="item-cart-btn"
          onClick={async () => {
            await addProductToCart(id);
            productCountFunc({
              variables: {
                input: {
                  usr_id: Cookies.get('lambda_usr_id')
                }
              },
              // skip: !Cookies.get('lambda_usr_id')
            })
          
           
            
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
