import { useQuery } from "@apollo/client";
import { _GetProduct } from "../../gql/query/getProduct.gql";

import { useCart } from "../../context/cartCtx";
import { Spinner } from "../Spinner/Spinner";

type Iprop = {
  id: string;
  quantity: number;
};

export const CartItem = ({ id, quantity }: Iprop) => {
  const { removeFromCart } = useCart();
  const { data, loading } = useQuery(_GetProduct, {
    variables: {
      input: {
        id,
      },
    },
  });
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="cartProdContainer">
      <img
        className="productImage"
        src={data.PRODUCT_GET.img}
        alt={data.PRODUCT_GET.name}
      />
      <div className="price">
        <p className="productName">{data.PRODUCT_GET.name}</p>
        <p className="productPrice">
          {data.PRODUCT_GET.price}$*{quantity}
        </p>
      </div>
      <div className="count">
        <p className="total">{data.PRODUCT_GET.price * quantity}$</p>
        <i className="fa-solid fa-trash" onClick={() => removeFromCart(id)}></i>
      </div>
    </div>
  );
};
