import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import { NavBar } from './components/NavBar/NavBar.js';
import { Form } from './components/Form/Form.js';
import './App.css';
import { EmployeesList } from './components/EmployeesList/EmployeesList.js';

function App() {
  const [employee, setEmployee] = useState({
    name: '',
    age: 0,
    country: '',
    position: '',
    years: 0
  });

  const [employees, setEmployees] = useState([]);

  const [listEmployeesUpdated, setListEmployeesUpdated] = useState(false);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await Axios.get('http://localhost:8000/api/employees');
        // Extraer datos de la respuesta de Axios
        const responseData = response.data && response.data.data;
        setEmployees(responseData || []);
      } catch (error) {
        console.error('Error fetching data...!!!', error);
      }
    };
    getEmployees();
    setListEmployeesUpdated(false);
  }, [listEmployeesUpdated]);

  return (
    <Fragment>
      <NavBar />
      <div>
        <Form employee={employee} setEmployee={setEmployee} />
      </div>
      <div id='main-container'>
        <h2 className='titList'>Lista de Empleados</h2>
        <div>
          <EmployeesList
            employee={employee}
            setEmployee={setEmployee}
            employees={employees}
            setListEmployeesUpdated={setListEmployeesUpdated}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
