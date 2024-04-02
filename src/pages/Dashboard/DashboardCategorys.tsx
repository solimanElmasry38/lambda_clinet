import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import { Spinner } from '../../components/Spinner/Spinner';
import { useMutation, useQuery } from '@apollo/client';
import { _GetCategorys } from '../../gql/query/getCategorys';
import { useToasts } from 'react-toast-notifications';
import { _RemoveCategorys } from '../../gql/mutation/removeCategorys';
import PopUpForm from '../../components/PopUpForm/PopUpForm';
import { _CreateUser } from '../../gql/mutation/createUser.gql';
import { _CreateCategory } from '../../gql/mutation/createCategory';

function DashboardCategorys() {
  const { addToast } = useToasts();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    img: ''
    // Add more form fields here if needed
  });
  const [REMOVE_CATEGORYS, _mutationObj] = useMutation(_RemoveCategorys);

  const { data, loading, error } = useQuery(_GetCategorys);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    addToast(error.message, { appearance: 'error' });
    throw error;
  }
  const handelRemove = async () => {
    await REMOVE_CATEGORYS({
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
      <PopUpForm mutation={_CreateCategory} inputs={formData}>
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
          <>
            <i className="fa-solid fa-trash" onClick={handelRemove}></i>
          </>
        ) : (
          <i className="fa-solid fa-trash  lowOpacity"></i>
        )}
      </div>
      <div className="tableCountainer">
        <Table
          headers={
            data &&
            Object.keys(data.GET_CATEGORYS[0]).filter(
              (item) =>
                item !== 'img' &&
                item !== '__typename' &&
                item !== 'desc' &&
                item !== 'is_available'
            )
          }>
          {data.GET_CATEGORYS.map((category) => (
            <tr key={category.id}>
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={selectedProducts.includes(category.id)}
                  onChange={() => handleCheckboxChange(category.id)}
                />
              </td>
              <td>{category.id}</td>
              <td>{category.name}</td>
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

export default DashboardCategorys;
