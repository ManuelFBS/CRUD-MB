// import './App.css';
// import React, { Fragment, useEffect, useState } from 'react';
import React, { Fragment } from 'react';
import { NavBar } from './components/NavBar/NavBar.js';
import { Form } from './components/Form/Form.js';
// import Axios from 'axios';

function App() {
  return (
    <Fragment>
      <NavBar />
      <div>
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
