import React, { useEffect, useState } from 'react';
import { useQuery, useSubscription } from '@apollo/client';
import { _GetCartCount } from '../../gql/query/getCartCount';
import { _AddToCartSub } from '../../gql/subscribtion/addToCartSub';
import Cookies from 'js-cookie';
import './ProductsCartCount.scss';
import { Spinner } from '../Spinner/Spinner';

function ProductsCartCount() {
  const [cartCount, setCartCount] = useState(0);
  const [_loading, setLoading] = useState(true);

  const { data: cartCountData, loading: cartCountLoading } = useQuery(_GetCartCount, {
    variables: {
      input: {
        usr_id: Cookies.get('lambda_usr_id')
      }
    },
    skip: !Cookies.get('lambda_usr_id')
  });

  const { data: addToCartData} = useSubscription(_AddToCartSub);

  useEffect(() => {
    if (cartCountData) {
      setCartCount(cartCountData.GET_CART_COUNT);
      setLoading(false);
    }
  }, [cartCountData]);

  useEffect(() => {
    if (addToCartData && addToCartData.ADD_TO_CART_SUB.ProductsInCart) {
      setCartCount(addToCartData.ADD_TO_CART_SUB.ProductsInCart);
    }
  }, [addToCartData]);

  if (cartCountLoading) {
    return <Spinner />;
  }

  return <span className="CartItemsCount">{cartCount}</span>;
}

export default ProductsCartCount;
