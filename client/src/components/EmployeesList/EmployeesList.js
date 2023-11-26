import React from 'react';
import './EmployeesList.css';

export const EmployeesList = () => {
  return (
    <table>
      <thead>
        <tr className='tr'>
          <th className='th'>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>País</th>
          <th>Cargo</th>
          <th>Años</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>aaaaaa</td>
          <td>10</td>
          <td>aaaaaaaaa</td>
          <td>aaaaaa</td>
          <td>10</td>
        </tr>
        <tr>
          <td>2</td>
          <td>bbbbbb</td>
          <td>20</td>
          <td>bbbbbbbbb</td>
          <td>bbbbbb</td>
          <td>20</td>
        </tr>
        <tr>
          <td>3</td>
          <td>cccccc</td>
          <td>30</td>
          <td>ccccccccc</td>
          <td>cccccc</td>
          <td>30</td>
        </tr>
        <tr>
          <td>4</td>
          <td>dddddd</td>
          <td>40</td>
          <td>dddddddd</td>
          <td>dddddd</td>
          <td>40</td>
        </tr>
      </tbody>
    </table>
  );
};
