import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { Spinner } from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';
import { useToasts } from 'react-toast-notifications';
import { _RemoveProduct } from '../../gql/mutation/removeProduct';
import { _CreateUser } from '../../gql/mutation/createUser.gql';
import PopUpForm from '../../components/PopUpForm/PopUpForm';

function DashboardProducts() {
  const { addToast } = useToasts();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    price: 0,
    count: 0,
    is_available: false,
    desc: ''
    // Add more form fields here if needed
  });
  console.log(formData);
  const [REMOVE_PRODUCT, _mutationObj] = useMutation(_RemoveProduct);
  const { data, loading, error } = useQuery(_GetProducts, {
    variables: {
      input: {}
    }
  });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    addToast(error.message, { appearance: 'error' });
    throw error;
  }

  const handleCheckboxChange = (productId: string) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        return prevSelectedProducts.filter((id) => id !== productId);
      } else {
        return [...prevSelectedProducts, productId];
      }
    });
  };

  const handelRemove = async () => {
    await REMOVE_PRODUCT({
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

  return (
    <>
      <PopUpForm mutation={_CreateUser} inputs={formData}>
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
        <label htmlFor="">price</label>

        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            });
          }}
        />
        <label htmlFor="">count</label>

        <input
          type="number"
          id="count"
          name="count"
          value={formData.count}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            });
          }}
        />
        <label htmlFor="">is_available</label>

        <input
          type="checkbox"
          id="is_available"
          name="is_available"
          checked={formData.is_available}
          // value={formData.is_available}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            });
          }}
        />
        <label htmlFor="">desc</label>

        <input
          type="text"
          id="desc"
          name="desc"
          value={formData.desc}
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
          headers={Object.keys(data.PRODUCTS_GET[0]).filter(
            (item) =>
              item !== 'img' && item !== '__typename' && item !== 'desc' && item !== 'is_available'
          )}>
          {data.PRODUCTS_GET.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                />
              </td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.count}</td>
              <td>{product.price}</td>
              <td>{product.categorys && product.categorys.name}</td>
              <td>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => {
                    handelRemove();
                  }}></i>
                <i className="fa-solid fa-pen-to-square"></i>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
}

export default DashboardProducts;
