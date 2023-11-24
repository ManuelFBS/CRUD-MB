import { createEmployee } from '../controllers/PostEmployeeController.js';

export const createEmployeeHandler = async (req, res) => {
  try {
    const employee = req.body;
    const result = await createEmployee(employee);

    res.status(201).json({
      message: 'The employee has been successfully registered...!!!',
      data: employee
    });

    return result;
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error...',
      error: error.message
    });
  }
};
