import './App.css';
// import React, { Fragment, useEffect, useState } from 'react';
import React, { Fragment } from 'react';
import { NavBar } from './components/NavBar/NavBar.js';
// import Axios from 'axios';

function App() {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(0);
  // const [country, setCountry] = useState('');
  // const [position, setPosition] = useState('');
  // const [years, setYears] = useState(0);

  // const add = () => {
  //   Axios.post('http://localhost:7000/api/employees/create', {
  //     name: name,
  //     age: age,
  //     country: country,
  //     position: position,
  //     years: years
  //   }).then(() => {
  //     alert('Registered employee...!!!');
  //   });
  // };
  // const [employee, setEmployee] = useState({
  //   name: '',
  //   age: 0,
  //   country: '',
  //   position: '',
  //   years: 0
  // });

  // const [employees, setEmployees] = useState([]);

  // const [listEmployeesUpdated, setListEmployeesUpdated] = useState(false);

  // useEffect(() => {
  //   const getEmployees = () => {
  //     fetch('http://localhost:7000/api/employees')
  //       .then((res) => res.json)
  //       .then((res) => setEmployees(res.data || []));
  //   };
  //   getEmployees();
  //   setListEmployeesUpdated(false);
  // }, [listEmployeesUpdated]);

  return (
    <Fragment>
      <NavBar />
    </Fragment>
    // <div className='App'>
    //   <div className='datos'>
    //     <label>
    //       Nombre:{' '}
    //       <input
    //         onChange={(event) => {
    //           setName(event.target.value);
    //         }}
    //         type='text'
    //       />
    //     </label>
    //     <label>
    //       Edad:{' '}
    //       <input
    //         onChange={(event) => {
    //           setAge(event.target.value);
    //         }}
    //         type='number'
    //       />
    //     </label>
    //     <label>
    //       País:{' '}
    //       <input
    //         onChange={(event) => {
    //           setCountry(event.target.value);
    //         }}
    //         type='text'
    //       />
    //     </label>
    //     <label>
    //       Cargo:{' '}
    //       <input
    //         onChange={(event) => {
    //           setPosition(event.target.value);
    //         }}
    //         type='text'
    //       />
    //     </label>
    //     <label>
    //       Años:{' '}
    //       <input
    //         onChange={(event) => {
    //           setYears(event.target.value);
    //         }}
    //         type='number'
    //       />
    //     </label>
    //     <button onClick={add}>Registrar</button>
    //   </div>
    // </div>
  );
}

export default App;
