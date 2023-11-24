import { executeQuery } from '../config/database.js';

/**
 * La función `updateEmployee` actualiza los campos de un empleado en una tabla de base de datos según
 * la identificación del empleado proporcionada y los campos actualizados.
 * @param employeeID - El parámetro EmployeeID es el ID del empleado que desea actualizar en la base de
 * datos.
 * @param updatedFields - Un objeto que contiene los campos que se actualizarán y sus nuevos valores.
 * Las claves del objeto representan los nombres de los campos y los valores representan los nuevos
 * valores para esos campos.
 * @returns el resultado de la consulta ejecutada.
 */
export const updateEmployee = async (employeeID, updatedFields) => {
  try {
    const setClause = Object.keys(updatedFields)
      .map((field) => `${field} = ?`)
      .join(', ');
    const values = Object.values(updatedFields);
    const query = `UPDATE employee SET ${setClause} WHERE id = ?`;

    values.push(employeeID);

    const result = await executeQuery(query, values);

    return result;
  } catch (error) {
    throw error;
  }
};
