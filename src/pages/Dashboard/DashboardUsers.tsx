import { useQuery } from '@apollo/client';
import React from 'react'
import { _GetUsers } from '../../gql/query/getUsers.gql';
import { Spinner } from '../../components/Spinner/Spinner';
import Cookies from 'js-cookie';
import Table from '../../components/Table/Table';

function DashboardUsers() {
  // console.log(Cookies.get('lambda_usr_id'))
  // console.log(Cookies.get('lambda_usr_token'))

  const { data, loading, error } = useQuery(_GetUsers, {
    variables: {
      input: {
        id:  Cookies.get('lambda_usr_id'),
        token: Cookies.get('lambda_usr_token')
      
      }
    }
  });
  if (loading) {
    return <Spinner />;
  }
  if(error){
    throw error
  }
console.log(data)
  return (
    <>
      <div className="actionsBar"> actions Bar</div>
      <div className='tableCountainer'>
        <Table
          headers={data&&Object.keys(data.USERS_GET[0]).filter(
            (item) =>
              item !== 'img' && item !== '__typename' && item !== 'desc' && item !== 'is_available'
          )}
         
        >
          {data.USERS_GET.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.user_name}</td>
            <td>{user.email}</td>
            <td>{user.joined_at}</td>
            <td>{user.last_update}</td>
           

          </tr>
        ))}
        </Table>
      </div>
    </>
  );
}

export default DashboardUsers
