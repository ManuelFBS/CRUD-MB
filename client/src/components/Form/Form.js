import React from 'react';

export const Form = () => {
  // export const Form = (employee, setEmployee) => {
  // const handleChange = (e) => {
  //   setEmployee({
  //     ...employee,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // let { name, age, country, position, years } = employee;

  // const handleSubmit = () => {
  //   // Validación de datos...
  //   if (name === '' || age === 0 || country === '' || position === '') {
  //     alert('Todos los campos son obligatorios');
  //     return;
  //   }
  // };

  // // Consulta...
  // const requestInit = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json', requestInit },
  //   body: JSON.stringify(employee)
  // };

  // fetch('http://localhost:7000/api/employees/create', requestInit)
  //   .then((res) => res.json)
  //   .then((res) => console.log(res));

  // // Reiniciando state del employee...
  // setEmployee({
  //   name: '',
  //   age: 0,
  //   country: '',
  //   position: '',
  //   years: 0
  // });

  return (
    // <form onSubmit={handleSubmit}>
    <div>
      <form className='formData'>
        <div className='datos'>
          <label htmlFor='name' className='formLabel'>
            Nombre:
            <input
              // onChange={handleChange}
              name='name'
              type='text'
              id='name'
              className='inputData'
            />
          </label>
          <label htmlFor='age' className='formLabel'>
            Edad:
            <input
              // onChange={handleChange}
              name='age'
              type='number'
              id='age'
              className='inputData'
            />
          </label>
          <label htmlFor='country' className='formLabel'>
            País:
            <input
              // onChange={handleChange}
              name='country'
              type='text'
              id='country'
              className='inputData'
            />
          </label>
          <label htmlFor='position' className='formLabel'>
            Cargo:
            <input
              // onChange={handleChange}
              name='position'
              type='text'
              id='position'
              className='inputData'
            />
          </label>
          <label htmlFor='years' className='formLabel'>
            Años:
            <input
              // onChange={handleChange}
              name='years'
              type='number'
              id='years'
              className='inputData'
            />
          </label>
          {/* <button onClick={add}>Guardar</button> */}
          <button className='buttonSave' type='submit'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
