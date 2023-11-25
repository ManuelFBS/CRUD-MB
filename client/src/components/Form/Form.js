import React from 'react';

export const Form = (employee, setEmployee) => {
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  let { name, age, country, position, years } = employee;

  const handleSubmit = () => {
    // Validación de datos...
    if (name === '' || age === 0 || country === '' || position === '') {
      alert('Todos los campos son obligatorios');
      return;
    }
  };

  // Consulta...
  const requestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', requestInit },
    body: JSON.stringify(employee)
  };

  fetch('http://localhost:7000/api/employees/create', requestInit)
    .then((res) => res.json)
    .then((res) => console.log(res));

  // Reiniciando state del employee...
  setEmployee({
    name: '',
    age: 0,
    country: '',
    position: '',
    years: 0
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className='datos'>
        <label htmlFor='name' className='formLabel'>
          Nombre:
          <input
            name='name'
            onChange={handleChange}
            type='text'
            id='name'
            className='inputData'
          />
        </label>
        <label>
          Edad:
          <input
            onChange={handleChange}
            type='number'
            id='age'
            className='inputData'
          />
        </label>
        <label>
          País:
          <input
            onChange={handleChange}
            type='text'
            id='country'
            className='inputData'
          />
        </label>
        <label>
          Cargo:
          <input
            onChange={handleChange}
            type='text'
            id='position'
            className='inputData'
          />
        </label>
        <label>
          Años:
          <input
            onChange={handleChange}
            type='number'
            id='years'
            className='inputData'
          />
        </label>
        <button onClick={add}>Guardar</button>
      </div>
    </form>
  );
};
