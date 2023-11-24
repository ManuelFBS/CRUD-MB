import { Router } from 'express';
import * as getEmpHand from '../handlers/GetEmployeesHandler.js';
import { createEmployeeHandler } from '../handlers/PostEmployeeHandler.js';

export const routes = Router();

const prefix = '/api';

routes.get(prefix, (rer, res) => {
  res.send('Welcome to the API Rest Employee...!!!');
});

routes.get(`${prefix}/employees`, getEmpHand.getAllEmployeesHandler);

routes.get(`${prefix}/employees/byid/:id`, getEmpHand.getEmployeeByIDHandler);

routes.post(`${prefix}/employees/create`, createEmployeeHandler);
