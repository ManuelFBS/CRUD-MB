import { executeQuery } from '../config/database.js';

/**
 * La función crea un nuevo registro de empleado en una tabla de base de datos.
 * @param employee - El parámetro `empleado` es un objeto que contiene las siguientes propiedades:
 * @returns el resultado de ejecutar la consulta para insertar un nuevo empleado en la base de datos.
 */
export const createEmployee = async (employee) => {
  try {
    const query =
      'INSERT INTO employee (name, age, country, position, years) VALUES (?, ?, ?, ?, ?)';
    const values = [
      employee.name,
      employee.age,
      employee.country,
      employee.position,
      employee.years
    ];
    const result = await executeQuery(query, values);

    // return result;
    return {
      success: true,
      message: 'El empleaddo ha sido registrado correctamente...!!!',
      data: employee
    };
  } catch (error) {
    // throw error;
    console.error('Error al tratar de crear el empleado...!');

    return {
      success: false,
      message: 'Ha ocurrido un error al tratar de crear el empleado...',
      error: error.message
    };
  }
};
