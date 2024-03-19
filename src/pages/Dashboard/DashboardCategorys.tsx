import React from 'react';
import Table from '../../components/Table/Table';
import { Spinner } from '../../components/Spinner/Spinner';
import { useQuery } from '@apollo/client';
import { _GetCategorys } from '../../gql/query/getCategorys';
import { useToasts } from 'react-toast-notifications';

function DashboardCategorys() {
  const { addToast } = useToasts();
  const { data, loading, error } = useQuery(_GetCategorys);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    addToast(error.message, { appearance: 'error' });
    throw error;
  }

  return (
    <>
      <div className="actionsBar"> actions Bar</div>
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
