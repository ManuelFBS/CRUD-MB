import { executeQuery } from '../config/database.js';

export const getAllEmployees = async () => {
  try {
    const query = 'SELECT * FROM employee';
    const result = await executeQuery(query);

    return result;
  } catch (error) {
    throw error;
  }
};

// export const getAllEmployeeByID = async (id) => {
//   try {
//     const query = 'SELECT * FROM employee WHERE id = ?';
//     const result = await executeQuery(query);

//     return result;
//   } catch (error) {
//     throw error;
//   }
// };
