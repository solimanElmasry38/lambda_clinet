import React, { useEffect } from 'react';
import { useSearch } from '../../context/searchCtx';
import { useLazyQuery } from '@apollo/client';
import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { Spinner } from '../../components/Spinner/Spinner';
import './Search.scss';
import VerProductCard from '../../components/VerProductCard/VerProductCard';
import { useCart } from '../../context/cartCtx';

import { _GetProductsNames } from '../../gql/query/getProductsNames';
function Search() {
  const [ProductsQueryFunc, ProductsQuery] = useLazyQuery(_GetProducts);

  const { addToCart } = useCart();
  const { queryRef, categoryRef } = useSearch();

  useEffect(() => {
    ProductsQueryFunc({
      variables: {
        input: {
          byCategory: categoryRef,
          filter: queryRef,
          orderByName: 'asc'
        }
      }
    });
  }, [categoryRef]);
  if (ProductsQuery.loading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="searchSec">
        {ProductsQuery.data &&
          ProductsQuery.data.PRODUCTS_GET.map((product) => (
            <VerProductCard datas={product} IsCartProduct={false} key={product.id}>
              {product.is_available ? (
                <button
                  className="item-cart-btn"
                  onClick={() => addToCart(product.id, product.price)}
                >
                  Add To Cart
                </button>
              ) : (
                <p>notAvaliable</p>
              )}
            </VerProductCard>
          ))}
      </section>
    </>
  );
}

export default Search;
