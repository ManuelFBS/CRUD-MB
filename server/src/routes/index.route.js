import { Router } from 'express';
import * as getEmpHand from '../handlers/GetEmployeesHandler.js';
import { createEmployeeHandler } from '../handlers/PostEmployeeHandler.js';
import { updateEmployeeHandler } from '../handlers/PutEmployeeHandler.js';

export const routes = Router();

const prefix = '/api';

/* El código `routes.get(prefijo, (rer, res) => {
  res.send('¡¡¡Bienvenido al API Rest Employee...!!!');
});` está definiendo una ruta que maneja una solicitud GET al punto final raíz (`/api`). Cuando se
realiza una solicitud GET a este punto final, ejecutará la función de devolución de llamada `(rer,
res) => { res.send('¡¡¡Bienvenido a API Rest Employee...!!!'); }`. */
routes.get(prefix, (rer, res) => {
  res.send('Welcome to the API Rest Employee...!!!');
});

/* El código `routes.get(`/employees`, getEmpHand.getAllEmployeesHandler);` define una ruta
para obtener todos los empleados. Cuando se realiza una solicitud GET al punto final
`/api/employees`, ejecutará la función `getAllEmployeesHandler` para manejar la solicitud y
recuperar a todos los empleados. */
routes.get(`${prefix}/employees`, getEmpHand.getAllEmployeesHandler);

/* El código `routes.get(`/employees/byid/:id`, getEmpHand.getEmployeeByIDHandler);` define
una ruta para obtener un empleado por su ID. Cuando se realiza una solicitud GET al punto final
`/api/employees/byid/:id`, se ejecutará la función `getEmployeeByIDHandler` para manejar la
solicitud y recuperar al empleado con la ID especificada. */
routes.get(`${prefix}/employees/byid/:id`, getEmpHand.getEmployeeByIDHandler);

/* La línea `routes.post(`/employees/create`, createEmployeeHandler);` define una ruta para
crear un nuevo empleado. Cuando se realiza una solicitud POST al punto final
`/api/employees/create`, se ejecutará la función `createEmployeeHandler` para manejar la solicitud y
crear un nuevo empleado. */
routes.post(`${prefix}/employees/create`, createEmployeeHandler);

/* La línea `routes.patch(`/employees/update/:id`, updateEmployeeHandler);` define una ruta
PATCH para actualizar la información de un empleado. */
routes.patch(`${prefix}/employees/update/:id`, updateEmployeeHandler);
