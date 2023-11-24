import { executeQuery } from '../config/database.js';

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
/*
// PatchEmployeeController.js
import { executeQuery } from '../config/database.js';

export const updateEmployee = async (employeeId, updatedFields) => {
  try {
    const setClause = Object.keys(updatedFields).map((field) => `${field} = ?`).join(', ');
    const values = Object.values(updatedFields);
    
    const query = `UPDATE employee SET ${setClause} WHERE id = ?`;
    values.push(employeeId);

    const result = await executeQuery(query, values);

    return result;
  } catch (error) {
    throw error;
  }
};

*/
