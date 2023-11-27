// Form.js
import React from 'react';
import './Form.css';
import swal from 'sweetalert2';

export const Form = ({ employee, setEmployee }) => {
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  let { name, age, country, position, years } = employee;

  const handleSubmit = () => {
    age = parseInt(age, 10);
    years = parseInt(years, 10);

    // Validación de datos...
    if (
      name === '' ||
      age < 18 ||
      country === '' ||
      position === '' ||
      years < 1
    ) {
      // alert('Todos los campos son obligatorios...!!!');
      swal.fire({
        title: 'Advertencia...',
        text: 'Todos los campos son obligatorios !!!',
        icon: 'warning',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    // Consulta...
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee)
    };

    // fetch('http://localhost:8000/api/employees/create', requestInit)
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));

    fetch('http://localhost:8000/api/employees/create', requestInit)
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          swal.fire({
            title: 'Registro exitoso...',
            text: 'El empleado ha sido registrado correctamente.',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar'
          });
          // Reiniciando state del employee...
          setEmployee({
            name: '',
            age: 0,
            country: '',
            position: '',
            years: 0
          });
        } else {
          swal.fire({
            title: 'Error...',
            text:
              response.message ||
              'Ha ocurrido un error al intentar registrar el empleado.',
            icon: 'error',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar'
          });
        }
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error);
        // Manejar el error, si es necesario
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div>
      <form className='formData' onSubmit={handleFormSubmit}>
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
              onChange={handleChange}
            />
          </div>
          <button
            type='button'
            className='buttonSave'
            onClick={handleFormSubmit}
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
