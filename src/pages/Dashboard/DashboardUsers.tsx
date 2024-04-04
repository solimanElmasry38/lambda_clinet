import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { _GetUsers } from '../../gql/query/getUsers.gql';
import { Spinner } from '../../components/Spinner/Spinner';
import Cookies from 'js-cookie';
import Table from '../../components/Table/Table';

import { _RemoveUsers } from '../../gql/mutation/removeUsers';
import PopUpForm from '../../components/PopUpForm/PopUpForm';
import { _CreateUser } from '../../gql/mutation/createUser.gql';

function DashboardUsers() {

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    password: '',
    img:"",
    is_admin: false,
   
    // Add more form fields here if needed
  });
  console.log(formData);
  const [REMOVE_USERS, _mutationObj] = useMutation(_RemoveUsers);

  const { data, loading, error } = useQuery(_GetUsers, {
    variables: {
      input: {
        id: Cookies.get('lambda_usr_id'),
        token: Cookies.get('lambda_usr_token')
      }
    }
  });
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    
    throw error;
  }
  const handelRemove = async () => {
    await REMOVE_USERS({
      variables: {
        input: {
          Ids: selectedProducts
        }
      }
    })
      .then((res) => {
        console.log(res)
        window.location.reload();
      })
      .catch((err) => {
        throw err;
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
<PopUpForm mutation={_CreateUser} inputs={formData}>
<label htmlFor="">user_name</label>

        <input
          type="text"
          id="user_name"
          name="user_name"
          value={formData.user_name}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            });
          }}
        />
        <label htmlFor="">email</label>

        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            });
          }}
        />
        <label htmlFor="">password</label>

        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            });
          }}
        />
        <label htmlFor="">img</label>

        <input
          type="texy"
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
        <label htmlFor="">is_admin</label>

        <input
          type="checkbox"
          id="is_admin"
          name="is_admin"
          checked={formData.is_admin}
          // value={formData.is_available}
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
            Object.keys(data.USERS_GET[0]).filter(
              (item) =>
                item !== 'img' &&
                item !== '__typename' &&
                item !== 'desc' &&
                item !== 'is_available'
            )
          }>
          {data.USERS_GET.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={selectedProducts.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
              <td>{user.id}</td>
              <td>{user.user_name}</td>
              <td>{user.email}</td>
              <td>{user.joined_at}</td>

              <td>{user.last_update}</td>
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

export default DashboardUsers;
