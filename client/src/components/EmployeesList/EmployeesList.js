import React from 'react';

export const EmployeesList = () => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>País</th>
          <th>Cargo</th>
          <th>Años</th>
        </tr>
      </thead>
    </table>
  );
};