import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import { Spinner } from '../../components/Spinner/Spinner';
import { useMutation, useQuery } from '@apollo/client';
import { _GetOffers } from '../../gql/query/getOffers';
import Cookies from 'js-cookie';
import { useToasts } from 'react-toast-notifications';
import { _RemoveOffers } from '../../gql/mutation/removeOffers';
import PopUpForm from '../../components/PopUpForm/PopUpForm';
import { _CreateUser } from '../../gql/mutation/createUser.gql';
import { _CreateOffer } from '../../gql/mutation/createOffer';

function DashboardOffers() {
  const { addToast } = useToasts();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    img:''
    // Add more form fields here if needed
  });
  console.log(formData)
  const [REMOVE_OFFOERS, _mutationObj] = useMutation(_RemoveOffers);

  const { data, loading, error } = useQuery(_GetOffers, {
    variables: {
      input: {
        usr_id: Cookies.get('lambda_usr_id'),
        usr_token: Cookies.get('lambda_usr_token')
      }
    }
  });
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    addToast(error.message, { appearance: 'error' });
    throw error;
  }
  const handelRemove = async () => {
    await REMOVE_OFFOERS({
      variables: {
        input: {
          Ids: selectedProducts
        }
      }
    })
      .then((res) => {
        addToast(res.data, { appearance: 'success' });
        window.location.reload();
      })
      .catch((err) => {
        addToast(err.message, { appearance: 'error' });
      });
  };
  const handleCheckboxChange = (productId: string) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        return prevSelectedProducts.filter((id) => id !== productId);
      } else {
        return [...prevSelectedProducts, productId];
      }
    });
  };


  return (
    <>
          <PopUpForm mutation={_CreateOffer} inputs={formData}>
        <label htmlFor="">name</label>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            });
          }}
          
        />

<label htmlFor="">img</label>

         <input
          type="text"
          id="img"
          name="img"
          value={formData.img}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            });
          }}
        />

      </PopUpForm>
         <div className="actionsBar">
        {selectedProducts.length > 0 ? (
          <i className="fa-solid fa-trash" onClick={handelRemove}></i>
        ) : (
          <i className="fa-solid fa-trash  lowOpacity"></i>
        )}
      </div>
      <div className="tableCountainer">
        <Table
          headers={
            data &&
            Object.keys(data.OFFERS_GET[0]).filter(
              (item) =>
                item !== 'img' &&
                item !== '__typename' &&
                item !== 'desc' &&
                item !== 'is_available'
            )
          }>
          {data.OFFERS_GET.map((offer) => (
            <tr key={offer.id}>
                  <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={selectedProducts.includes(offer.id)}
                  onChange={() => handleCheckboxChange(offer.id)}
                />
              </td>
              <td>{offer.id}</td>
              <td>{offer.img}</td>
              <td>
                <i className="fa-solid fa-trash"></i>
                <i className="fa-solid fa-pen-to-square"></i>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
}

export default DashboardOffers;
