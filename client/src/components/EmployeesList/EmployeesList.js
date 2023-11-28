import React, { useState } from 'react';
import './EmployeesList.css';
import Axios from 'axios';
import swal from 'sweetalert2';

export const EmployeesList = ({
  employee,
  setEmployee,
  employees,
  setListEmployeesUpdated
}) => {
  // console.log('Employees', employees);
  const [loading, setLoading] = useState(false);

  if (!employees || employees.length === 0) {
    return <p>No hay empleados disponibles.</p>;
  }

  const handleDelete = async (id) => {
    try {
      setLoading(true);

      await Axios.delete(`http://localhost:8000/api/employees/del/${id}`);

      setEmployee({
        name: '',
        age: '',
        country: '',
        position: '',
        years: ''
      });

      // Otras acciones después de actualizar, como mostrar una alerta
      // swal.fire('Éxito', 'Registro actualizado correctamente', 'success');
      swal.fire({
        title: 'Info...',
        text: 'Registro eliminado correctamente...!!!',
        icon: 'info',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
      // Mostrar una alerta de error si es necesario
      // swal.fire('Error', 'No se pudo eliminar el registro', 'error');
      swal.fire({
        title: 'error',
        text: error.message,
        icon: 'error',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });
    } finally {
      setLoading(false);
    }

    setListEmployeesUpdated(true);
  };

  const handleUpdate = async (id) => {
    try {
      const updatedFields = Object.fromEntries(
        Object.entries(employee).filter(([key, value]) => value !== '')
      );

      setLoading(true);

      await Axios.patch(
        `http://localhost:8000/api/employees/update/${id}`,
        updatedFields
      );

      // Se limpia el Form después de hacer la petición...
      setEmployee({
        name: '',
        age: '',
        country: '',
        position: '',
        years: ''
      });

      // Otras acciones después de actualizar, como mostrar una alerta
      // swal.fire('Éxito', 'Registro actualizado correctamente', 'success');
      swal.fire({
        title: 'Exito...',
        text: 'Registro actualizado correctamente...!!!',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });
    } catch (error) {
      console.error('Error al guardar el registro:', error);
      // Mostrar una alerta de error si es necesario
      // swal.fire('Error', 'No se pudo actualizar el registro', 'error');
      swal.fire({
        title: 'error',
        text: error.message,
        icon: 'error',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });
    } finally {
      setLoading(false);
    }

    setListEmployeesUpdated(true);
  };

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
  );
};
