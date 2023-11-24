import * as employeeGET from '../controllers/GetEmployeesController.js';

export const getAllEmployeesHandler = async (req, res) => {
  try {
    const result = await employeeGET.getAllEmployees();

    if (result[0].length > 0) {
      res.status(200).json({
        message: 'Employees retrieves successfully...!!!',
        data: result[0]
      });
    } else {
      res.status(404).json({
        message: 'The data is empty...!!!'
      });
    }

    return result;
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error...',
      error: error.message
    });
  }
};
/*
// employeeHandler.js
import { getAllEmployees } from './employeeController.js';

export const getAllEmployeesHandler = async () => {
  try {
    return await getAllEmployees();
  } catch (error) {
    console.error('Error in getAllEmployees handler:', error);
    throw 'Internal Server Error';
  }
};
*/
