import { executeQuery } from '../config/database.js';

export const deleteEmployee = async (employeeID) => {
  try {
    const query = `DELETE FROM employee WHERE id = ${employeeID}`;
    const result = await executeQuery(query);

    return result;
  } catch (error) {
    throw error;
  }
};
