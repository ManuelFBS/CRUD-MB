import { Router } from 'express';
import * as getEmpHand from '../handlers/GetEmployeesHandler.js';

export const routes = Router();

const prefix = '/api';

routes.get(prefix, (rer, res) => {
  res.send('Welcome to the API Rest Employee...!!!');
});

routes.get(`${prefix}/employees`, getEmpHand.getAllEmployeesHandler);
