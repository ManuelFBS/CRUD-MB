import React from 'react';
import './EmployeesList.css';

export const EmployeesList = () => {
  return (
    <table className='table'>
      <thead>
        <tr className='tr'>
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
