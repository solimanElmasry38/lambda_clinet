import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { Spinner } from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';
import { useToasts } from 'react-toast-notifications';
import { _RemoveProduct } from '../../gql/mutation/removeProduct';

function DashboardProducts() {
  const { addToast } = useToasts();
  const [REMOVE_PRODUCT, mutationObj] = useMutation(_RemoveProduct);
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
  const handelRemove = async (ProdId) => {
    await REMOVE_PRODUCT({
      variables: {
        input: {
          ProdId
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
      <div className="actionsBar"> actions Bar</div>
      <div className="tableCountainer">
        <Table
          headers={Object.keys(data.PRODUCTS_GET[0]).filter(
            (item) =>
              item !== 'img' && item !== '__typename' && item !== 'desc' && item !== 'is_available'
          )}>
          {data.PRODUCTS_GET.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.count}</td>
              <td>{product.price}</td>
              <td>{product.categorys.name}</td>
              <td>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => {
                    handelRemove(product.id);
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
