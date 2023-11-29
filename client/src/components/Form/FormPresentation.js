import React from 'react';
import './Form.css';

export const FormPresentation = ({
  employee,
  handleChange,
  handleSave,
  loading
}) => {
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
