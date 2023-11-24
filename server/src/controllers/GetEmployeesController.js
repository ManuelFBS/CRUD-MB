import { executeQuery } from '../config/database.js';

/**
 * La función `getAllEmployees` recupera todos los empleados de una tabla de base de datos llamada
 * `employee`.
 * @returns el resultado de la ejecución de la consulta.
 */
export const getAllEmployees = async () => {
  try {
    const query = 'SELECT * FROM employee';
    const result = await executeQuery(query);

    return result;
  } catch (error) {
    throw error;
  }
};

/**
 * La función `getAllEmployeeByID` es una función asincrónica que recupera todos los datos de los
 * empleados de una base de datos en función del ID del empleado proporcionado.
 * @param employID - El parámetro `employID` es el ID del empleado que desea recuperar de la base de
 * datos.
 * @returns el resultado de la consulta ejecutada en la tabla "empleado", donde el ID coincide con el
 * ID de empleo proporcionado.
 */
export const getAllEmployeeByID = async (employID) => {
  try {
    const query = `SELECT * FROM employee WHERE id = ${employID}`;
    const result = await executeQuery(query);

    return result;
  } catch (error) {
    throw error;
  }
};
