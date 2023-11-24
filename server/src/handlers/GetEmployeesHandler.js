import * as employeeGET from '../controllers/GetEmployeesController.js';

export const getAllEmployeesHandler = async (req, res) => {
  try {
    const result = await employeeGET.getAllEmployees();
    if (result.length > 0) {
      res.status(200).json({
        message: 'Employees retrieves successfully...!!!',
        data: result
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

export const getEmployeeByIDHandler = async (req, res) => {
  const { employID } = req.params;
  try {
    const result = await employeeGET.getAllEmployeeByID(employID);
    if (result.length > 0) {
      res.status(200).json({
        message: 'Employee retrieve successfully...!!!',
        data: result
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
