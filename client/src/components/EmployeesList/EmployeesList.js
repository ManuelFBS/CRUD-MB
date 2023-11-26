import React from 'react';
import './EmployeesList.css';

export const EmployeesList = ({ employees }) => {
  return (
    <table>
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
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.country}</td>
            <td>{employee.position}</td>
            <td>{employee.years}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
