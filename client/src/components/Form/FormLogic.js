import React, { useState } from 'react';
import Axios from 'axios';
import { validatedForm } from '../../utils/Validation';
import { FormPresentation } from './FormPresentation.js';
import swal from 'sweetalert2';

export const FormLogic = ({
  setEmployee: setEmployeeFromProps,
  setListEmployeesUpdated
}) => {
  const [loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState({
    name: '',
    age: '',
    country: '',
    position: '',
    years: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [e.target.name]: e.target.value
    }));
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

      // Otras acciones después de guardar, como mostrar una alerta
      // swal.fire('Éxito', 'Registro guardado correctamente', 'success');
      swal.fire({
        title: 'Exito...',
        text: 'Registro guardado correctamente...!!!',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });

      setEmployee((prevEmployee) => ({
        ...prevEmployee,
        name: '',
        age: 0,
        country: '',
        position: '',
        years: 0
      }));

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
    <FormPresentation
      employee={employee}
      handleChange={handleChange}
      handleSave={handleSave}
      loading={loading}
    />
  );
};
