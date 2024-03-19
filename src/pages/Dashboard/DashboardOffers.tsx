import React from 'react';
import Table from '../../components/Table/Table';
import { Spinner } from '../../components/Spinner/Spinner';
import { useQuery } from '@apollo/client';
import { _GetOffers } from '../../gql/query/getOffers';
import Cookies from 'js-cookie';
import { useToasts } from 'react-toast-notifications';

function DashboardOffers() {
  const { addToast } = useToasts();
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

  return (
    <>
      <div className="actionsBar"> actions Bar</div>
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
