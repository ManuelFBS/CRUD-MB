// import React, { Fragment, useEffect, useState } from 'react';
import React, { Fragment } from 'react';
import { NavBar } from './components/NavBar/NavBar.js';
import { Form } from './components/Form/Form.js';
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
        <h3>Lista de Empleados</h3>
        <EmployeesList />
      </div>
    </Fragment>
  );
}

export default App;
