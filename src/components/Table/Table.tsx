import React from 'react';

import './Table.scss';
function Table({  headers ,children}) {
    const header0=headers[0]
//   console.log(data);
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

export default Table;
