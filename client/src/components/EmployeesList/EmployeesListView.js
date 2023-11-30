import React from 'react';
// import './EmployeesList.css';

export const EmployeesListView = ({
  employees,
  handleDelete,
  handleUpdate,
  loading
}) => {
  return (
    <div className='table-Container'>
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
                  <button
                    className='butSave'
                    onClick={() => handleUpdate(employeeItem.id)}
                  >
                    {loading ? 'Editando' : 'Editar'}
                  </button>
                </div>
              </td>
              <td className='tdButton'>
                <div>
                  <button
                    className='butDel'
                    onClick={() => handleDelete(employeeItem.id)}
                  >
                    {loading ? 'Eliminando' : 'Eliminar'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
