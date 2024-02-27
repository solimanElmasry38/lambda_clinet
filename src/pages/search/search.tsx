import React, { useEffect } from 'react';
import { useSearch } from '../../context/searchCtx';
import { useLazyQuery } from '@apollo/client';
import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { Spinner } from '../../components/Spinner/Spinner';
import './search.scss';
import VerProductCard from '../../components/VerProductCard/VerProductCard';
import { useCart } from '../../context/cartCtx';
function Search() {
  const [ProductsQueryFunc, ProductsQuery] = useLazyQuery(_GetProducts);

  const { queryRef, categoryRef } = useSearch();
  const { addToCart } = useCart();

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
            <VerProductCard data={product} key={product.id}>
              {product.is_available ? (
                <button className="item-cart-btn" onClick={() => addToCart(product.id)}>
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
