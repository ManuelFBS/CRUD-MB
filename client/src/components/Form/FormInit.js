import React, { useState } from 'react';
// import './Form.css';
import Axios from 'axios';
import { validatedForm } from '../../utils/Validation';
import swal from 'sweetalert2';
import { FormView } from './FormView';

export const Form = ({ employee, setEmployee, setListEmployeesUpdated }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      const newErrors = validatedForm(employee);

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);

        swal.fire({
          title: 'Advertencia',
          text: 'Todos los campos son obligatorios...!',
          icon: 'warning',
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        });

        return;
      }

      setLoading(true);

      // Realizar la petición POST...
      await Axios.post('http://localhost:8000/api/employees/create', employee);

      // Se limpia el Form después de hacer la petición...
      setEmployee({
        name: '',
        age: '',
        country: '',
        position: '',
        years: ''
      });

      // Otras acciones después de guardar, como mostrar una alerta
      // swal.fire('Éxito', 'Registro guardado correctamente', 'success');
      swal.fire({
        title: 'Exito...',
        text: 'Registro guardado correctamente...!!!',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });

      setListEmployeesUpdated(true);
    } catch (error) {
      console.error('Error al guardar el registro:', error);
      // Mostrar una alerta de error si es necesario
      // swal.fire('Error', 'No se pudo guardar el registro', 'error');
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
  };

  return (
    <FormView
      employee={employee}
      handleChange={handleChange}
      handleSave={handleSave}
      loading={loading}
    />
  );
};
