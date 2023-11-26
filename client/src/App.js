// import React, { Fragment, useEffect, useState } from 'react';
import React, { Fragment } from 'react';
import { NavBar } from './components/NavBar/NavBar.js';
import { Form } from './components/Form/Form.js';
import './App.css';
import { EmployeesList } from './components/EmployeesList/EmployeesList.js';
// import Axios from 'axios';

function App() {
  return (
    <Fragment>
      <NavBar />
      <div>
        <Form />
      </div>
      <div className='list'>
        <h2 className='titList'>Lista de Empleados</h2>
        <EmployeesList />
      </div>
    </Fragment>
  );
}

export default App;
