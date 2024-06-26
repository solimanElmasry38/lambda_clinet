import React, { useEffect } from 'react';
import { useSearch } from '../../context/searchCtx';
import { useLazyQuery } from '@apollo/client';
import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { Spinner } from '../../components/Spinner/Spinner';
import './Search.scss';
import VerProductCard from '../../components/VerProductCard/VerProductCard';


import { _GetProductsNames } from '../../gql/query/getProductsNames';
import { AddToCartBtn } from '../../components/AddToCartBtn/AddToCartBtn';
function Search({onCartCountUpdate}) {
  const [ProductsQueryFunc, ProductsQuery] = useLazyQuery(_GetProducts);


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
  if (!ProductsQuery.loading) {
   console.log(ProductsQuery.data)
  }
  if(ProductsQuery.error){
    throw ProductsQuery.error
  }
  return (
    <>
      <section className="searchSec">
        {ProductsQuery.data &&
          ProductsQuery.data.PRODUCTS_GET.map((product) => (
            <VerProductCard item={product} IsCartProduct={false} key={product.id}>
             <AddToCartBtn onCartCountUpdate={onCartCountUpdate} id={product.id}/>
            </VerProductCard>
          ))}
      </section>
    </>
  );
}

export default Search;
