import React, { useState } from 'react';
import './Form.css';
import Axios from 'axios';
import swal from 'sweetalert2';

export const Form = ({ employee, setEmployee }) => {
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
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
    <div>
      <form className='formData'>
        <div className='data'>
          <div className='inputGroup'>
            <label htmlFor='name' className='formLabel'>
              Nombre:
            </label>
            <input
              name='name'
              type='text'
              id='name'
              className='inputData'
              value={employee.name}
              onChange={handleChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='age' className='formLabel'>
              Edad:
            </label>
            <input
              name='age'
              type='number'
              id='age'
              className='inputData'
              value={employee.age}
              onChange={handleChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='country' className='formLabel'>
              País:
            </label>
            <input
              name='country'
              type='text'
              id='country'
              className='inputData'
              value={employee.country}
              onChange={handleChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='position' className='formLabel'>
              Cargo:
            </label>
            <input
              name='position'
              type='text'
              id='position'
              className='inputData'
              value={employee.position}
              onChange={handleChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='years' className='formLabel'>
              Años:
            </label>
            <input
              name='years'
              type='number'
              id='years'
              className='inputData'
              value={employee.years}
              onChange={handleChange}
            />
          </div>
          <button
            type='button'
            className='buttonSave'
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
};
