import { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { useMutation, useQuery } from "@apollo/client";
import { _RemoveFromWishList } from "../../gql/mutation/removeFromWishList";
import { _IsInWishList } from "../../gql/query/isInWishList";
import { _AddToWishList } from "../../gql/mutation/addToWishList";
import Cookies from 'js-cookie';
import "./wishListBtn.scss"

export const WishListBtn = ({data}) => {
  const { id} = data;

 // State to track whether the product is in the wishlist
 const [isInWishList, setIsInWishList] = useState(false);
 const [loading, setLoading] = useState(true);
 

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
 const [addToWishList,addToWishListMut] = useMutation(_AddToWishList, {
   onCompleted: () => setIsInWishList(!isInWishList),
 
 });
 const [removeFromWishList,removeFromWishListMut] = useMutation(_RemoveFromWishList, {
   onCompleted: () => setIsInWishList(!isInWishList),
 
 });

 // Update isInWishList state based on query result
 useEffect(() => {
   if (!queryLoading && !queryError && queryData) {
     setIsInWishList(queryData.IS_IN_WISH_LIST);
   }
 }, [ queryData]);
 if(addToWishListMut.error){
   throw addToWishListMut.error
 }
   if(removeFromWishListMut.error){
     throw removeFromWishListMut.error
   }
 // Error handling
 if (loading || queryLoading) return <Spinner />;

console.log(removeFromWishListMut.data)
console.log(addToWishListMut.data)

    return(
        <div className="wishListBtnContainer">
        <label htmlFor={`wishlist-${id}`}>
          {isInWishList ? <i className="fa-solid fa-heart activeWishListIcon"></i> : <i className="fa-regular fa-heart inactiveWishListIcon"></i>}
          <input
            type="checkbox"
            id={`wishlist-${id}`}
            checked={isInWishList}
            onChange={() => {
              if(!isInWishList){

                addToWishList({
                  variables: {
                    input: {
                      Product_id: id,
                      usr_id: Cookies.get('lambda_usr_id')
                    }
                  }
                });
              }else{

                removeFromWishList({
                  variables: {
                    input: {
                      Product_id: id,
                      usr_id: Cookies.get('lambda_usr_id')
                    }
                  }
                })
              }

            }}
          />
        </label>
      </div>
    )

}