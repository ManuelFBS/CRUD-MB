// import React, { Fragment, useEffect, useState } from 'react';
import React, { Fragment, useEffect, useState } from 'react';
import { NavBar } from './components/NavBar/NavBar.js';
import { Form } from './components/Form/Form.js';
import './App.css';
import { EmployeesList } from './components/EmployeesList/EmployeesList.js';
// import Axios from 'axios';

function App() {
  const [employee, setEmployee] = useState({
    name: '',
    age: 0,
    country: '',
    position: '',
    years: 0
  });
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = () => {
      Axios.get('http://localhost:8000/api/employees').then((response) => {
        setEmployees(response.data);
      });
    };
    getEmployees();
  });

  return (
    <Fragment>
      <NavBar />
      <div>
        <Form />
      </div>
      <div id='main-container'>
        <h2 className='titList'>Lista de Empleados</h2>
        <div>
          <EmployeesList
            employee={employee}
            setEmployee={setEmployee}
            employees={employees}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
