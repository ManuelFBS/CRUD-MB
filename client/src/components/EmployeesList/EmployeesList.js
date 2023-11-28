import React from 'react';
import './EmployeesList.css';

export const EmployeesList = ({
  employee,
  setEmployee,
  employees,
  setListEmployeesUpdated
}) => {
  console.log('Employees', employees);

  if (!employees || employees.length === 0) {
    return <p>No hay empleados disponibles.</p>;
  }
  // Reiniciando state del employee...
  // setEmployee({
  //   name: '',
  //   age: 0,
  //   country: '',
  //   position: '',
  //   years: 0
  // });

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
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employeeItem) => (
          <tr key={employeeItem.id}>
            <td>{employeeItem.id}</td>
            <td>{employeeItem.name}</td>
            <td>{employeeItem.age}</td>
            <td>{employeeItem.country}</td>
            <td>{employeeItem.position}</td>
            <td>{employeeItem.years}</td>
            <td className='tdButton'>
              <div>
                <button className='butSave'>Editar</button>
              </div>
            </td>
            <td className='tdButton'>
              <div>
                <button className='butDel'>Eliminar</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
