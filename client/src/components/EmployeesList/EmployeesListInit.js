import React, { useState } from 'react';
import Axios from 'axios';
import swal from 'sweetalert2';
import { EmployeesListView } from './EmployeesListView';

export const EmployeesList = ({
  employee,
  setEmployee,
  employees,
  setListEmployeesUpdated
}) => {
  const [loading, setLoading] = useState(false);

  if (!employees || employees.length === 0) {
    return <p>No hay empleados disponibles.</p>;
  }

  // "confirmDelete" se encarga de advertir al usuario sobre la acción de eliminación
  // de un registro seleccionado, a llevarse cabo...
  const confirmDelete = (id) => {
    swal
      .fire({
        title: `Eliminar empleado ID: ${id}`,
        text: 'Desea eliminar a este empleado',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      })
      .then((result) => {
        if (result.value) {
          handleDelete(id);
        } else {
          return;
        }
      });
  };

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
        age: 0,
        country: '',
        position: '',
        years: 0
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
    <EmployeesListView
      employees={employees}
      handleDelete={confirmDelete}
      handleUpdate={handleUpdate}
      loading={loading}
    />
  );
};
