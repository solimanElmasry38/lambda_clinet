import React from 'react';

import './Table.scss';
function Table({  headers ,children}) {
  
  return (
    <table >
      <thead>
        <tr>
          <th>select</th>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
            <th>action</th>
          
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

export default Table;
