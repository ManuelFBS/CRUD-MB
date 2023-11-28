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

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await Axios.get('http://localhost:8000/api/employees');
        // Extraer datos de la respuesta de Axios
        const responseData = response.data && response.data.data;
        setEmployees(responseData || []);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data...!!!', error);
        // setLoading(false);
      }
    };
    getEmployees();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div>
        <Form employee={employee} setEmployee={setEmployee} />
      </div>
      <div id='main-container'>
        <h2 className='titList'>Lista de Empleados</h2>
        <div>
          <EmployeesList employees={employees} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
