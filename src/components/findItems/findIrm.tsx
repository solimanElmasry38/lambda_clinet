import { useQuery } from "@apollo/client";
import { _GetProduct } from "../../gql/query/getProduct.gql";
import { useCart } from "../../context/cartCtx";
import { useState } from "react";

export const FindItm = () => {
    const [arr,setarr]=useState({});

  cartItems.map(async (prod)=>{

      const { data, loading } = useQuery(_GetProduct, {
        variables: {
          input: {
            id: prod.id,
          },
        },
      });

      if(!loading){
        setarr((prev)=>{
            return [{...prev,prods:data.PRODUCT_GET}]
        })

      }
     
  })

console.log(arr)
  return (
    // <div className="ex">find {arr.prods}</div>ass 
    <div className="dib">dd</div>
    )
};
