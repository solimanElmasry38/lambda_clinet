// import { useEffect, useState } from 'react';
// import Rating from '../Rating/Rating';
// import Ratio from '../Ratio/Ratio';
// import './ProductCard.scss';
// import Cookies from 'js-cookie';
// import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
// import { _AddToWishList } from '../../gql/mutation/addToWishList';
// import { Spinner } from '../Spinner/Spinner';
// import { _IsInWishList } from '../../gql/query/isInWishList';
// export const ProductCard = ({ data, children }) => {
//   //count
//   // is_available,  
//     const [checked, setChecked] = useState(false);

//   const { id, name, img, price, desc } = data;
//   const isQuery=useQuery(_IsInWishList,{variables:{
//     input:{
//       productId:id,
//       usetId:Cookies.get('lambda_usr_id')
//     }
//   }})
//   const [queryfunc,obj]=useMutation(_AddToWishList)
//   if(obj.error){
//     console.log(obj.error)
//   }
//   if(obj.loading||isQuery.loading){
//     return <Spinner/>
//   }
//   console.log(isQuery.data.IS_IN_WISH_LIST)
//   return (
//     <div className="item-container">
//       <div className="main-item">
//         <Ratio ratio={'4x3'}>
//           <img src={img} alt="" />
//         </Ratio>
//       </div>
//       <h2 className="item-heading">
//         <a href={`/products/${id}`}>{name}</a>
//       </h2>
//       <p className="item-description">{desc}</p>
//       <div className="rating">
//         <Rating productId={id} />
//       </div>

//       <p className="item-price">
//         <sup>$</sup>
//         {price}
//       </p>
//       <div className="inpcont"  >

// {isQuery.data.IS_IN_WISH_LIST?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}
        
//       <input type="checkbox" name="" id="" onClick={()=>{
//               setChecked(prevChecked => !prevChecked)
//               if(checked){
//                 console.log("remove pr0oduct "+ id)
               
//               }else{
//                 console.log("add to wish lis t  "+ id)
//                 queryfunc({variables:{
//                   input:{
//                     Product_id: id,
//                     usr_id: Cookies.get('lambda_usr_id')
//                   }
//                 }})
//               }
//              }}/>
//       </div>
//       {children}
//     </div>
//   );
// };
import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';
import Ratio from '../Ratio/Ratio';
import './ProductCard.scss';
import Cookies from 'js-cookie';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { _AddToWishList } from '../../gql/mutation/addToWishList';
import { Spinner } from '../Spinner/Spinner';
import { _IsInWishList } from '../../gql/query/isInWishList';

export const ProductCard = ({ data, children }) => {
  const { id, name, img, price, desc } = data;

  // State to track whether the product is in the wishlist
  const [isInWishList, setIsInWishList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GraphQL query to check if the product is in the wishlist
  const { loading: queryLoading, error: queryError, data: queryData } = useQuery(_IsInWishList, {
    variables: {
      input: {
        productId: id,
        usetId: Cookies.get('lambda_usr_id')
      }
    },
    onCompleted: () => setLoading(false),
    
  });

  // GraphQL mutation to add/remove the product from the wishlist
  const [addToWishList] = useMutation(_AddToWishList, {
    onCompleted: () => setIsInWishList(!isInWishList),
  
  });

  // Update isInWishList state based on query result
  useEffect(() => {
    if (!queryLoading && !queryError && queryData) {
      setIsInWishList(queryData.IS_IN_WISH_LIST);
    }
  }, [queryLoading, queryError, queryData]);

  // Error handling
  if (loading || queryLoading) return <Spinner />;
  

  return (
    <div className="item-container">
      <div className="main-item">
        <Ratio ratio={'4x3'}>
          <img src={img} alt="" />
        </Ratio>
      </div>
      <h2 className="item-heading">
        <a href={`/products/${id}`}>{name}</a>
      </h2>
      <p className="item-description">{desc}</p>
      <div className="rating">
        <Rating productId={id} />
      </div>

      <p className="item-price">
        <sup>$</sup>
        {price}
      </p>
      <div className="inpcont">
        <label htmlFor={`wishlist-${id}`}>
          {isInWishList ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
          <input
            type="checkbox"
            id={`wishlist-${id}`}
            checked={isInWishList}
            onChange={() => {
              addToWishList({
                variables: {
                  input: {
                    Product_id: id,
                    usr_id: Cookies.get('lambda_usr_id')
                  }
                }
              });
            }}
          />
        </label>
      </div>
      {children}
    </div>
  );
};

 
