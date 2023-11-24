import { executeQuery } from '../config/database.js';

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

    return result;
  } catch (error) {
    throw error;
  }
};
