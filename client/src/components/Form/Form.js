// Form.js
import React from 'react';
import './Form.css';

export const Form = () => {
  return (
    <div>
      <form className='formData'>
        <div className='data'>
          <div className='inputGroup'>
            <label htmlFor='name' className='formLabel'>
              Nombre:
            </label>
            <input name='name' type='text' id='name' className='inputData' />
          </div>
          <div className='inputGroup'>
            <label htmlFor='age' className='formLabel'>
              Edad:
            </label>
            <input name='age' type='number' id='age' className='inputData' />
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
            />
          </div>
          <button type='submit' className='buttonSave'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
