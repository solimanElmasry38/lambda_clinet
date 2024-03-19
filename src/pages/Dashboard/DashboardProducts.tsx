import { useQuery } from '@apollo/client';
import React from 'react';
import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { Spinner } from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';

function DashboardProducts() {
  const { data, loading, error } = useQuery(_GetProducts, {
    variables: {
      input: {}
    }
  });
  if (loading) {
    return <Spinner />;
  }
  // if(erroer)

  return (
    <>
      <div className="actionsBar"> actions Bar</div>
      <div className='tableCountainer'>
        <Table
          headers={Object.keys(data.PRODUCTS_GET[0]).filter(
            (item) =>
              item !== 'img' && item !== '__typename' && item !== 'desc' && item !== 'is_available'
          )}
          
        >
          {data.PRODUCTS_GET.map((product) => (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.count}</td>
            <td>{product.price}</td>
            <td>{product.categorys.name}</td>
          </tr>
        ))}
        </Table>
      </div>
    </>
  );
}

export default DashboardProducts;
