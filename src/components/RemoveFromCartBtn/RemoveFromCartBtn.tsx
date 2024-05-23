import React from 'react';
import { _RemoveFromCart } from '../../gql/mutation/removeFromCart';
import { useMutation } from '@apollo/client';
import { Spinner } from '../Spinner/Spinner';
import Cookies from 'js-cookie';
import "./RemoveFromCartBtn.scss"
const RemoveFromCartBtn = ({item}) => {
  const [removeProdFunc, { loading, error }] = useMutation(_RemoveFromCart);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    throw error;
  }
  return (
    <div className='trashIconContainer'><i className="fa-solid fa-trash" onClick={async () => {

          await removeProdFunc({
              variables: {
                  input: {
                      Product_id: item.id,
                      usr_id: Cookies.get('lambda_usr_id')
                  }
              }
          });
          window.location.reload()
      } }></i></div>
  );
};

export default RemoveFromCartBtn;
