import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../components/Spinner/Spinner';
import { useQuery } from '@apollo/client';
import { _GetProduct } from '../../gql/query/getProduct.gql';
import './product.scss';

function Product() {
  const { prod_id } = useParams();
  const { data, loading } = useQuery(_GetProduct, {
    variables: {
      input: {
        id: prod_id
      }
    }
  });
  if (loading) {
    return <Spinner />;
  }

  return (
    // <div className="cartProdContainer">
    //   <img
    //     className="productImage"
    //     src={data.PRODUCT_GET.img}
    //     alt={data.PRODUCT_GET.name}
    //   />
    //   <div className="price">
    //     <p className="productName">{data.PRODUCT_GET.name}</p>
    //     <p className="productPrice">
    //       {data.PRODUCT_GET.price}$
    //     </p>
    //   </div>
    //   <div className="count">
    //     <p className="total">{data.PRODUCT_GET.price }$</p>
    //   </div>
    // </div>
    <section className="productSec">
      <div className="productContainer">
        <div className="prodImgContainer">
          <img className="productImage" src={data.PRODUCT_GET.img} alt={data.PRODUCT_GET.name} />
        </div>
        <div className="prodNameContainer">
          <h2 className="prodName">{data.PRODUCT_GET.name}</h2>
          <p className="prodDesc">{data.PRODUCT_GET.desc}</p>
        </div>
        <div className="prodPriceContainer">
          <p className="prodPrice">{data.PRODUCT_GET.price}$</p>
        </div>
      </div>
    </section>
  );
}

export default Product;

// function Product() {

// }
