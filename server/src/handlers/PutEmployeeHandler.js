import { updateEmployee } from '../controllers/PutEmployeeController.js';

export const updateEmployeeHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;

    const result = await updateEmployee(id, updatedFields);

    res.status(200).json({
      message: 'Employee updated successfully...!!!',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error...',
      error: error.message
    });
  }
};
/*
// PatchEmployeeHandler.js
import { updateEmployee } from '../controllers/PatchEmployeeController.js';

export const updateEmployeeHandler = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const updatedFields = req.body;

    const result = await updateEmployee(employeeId, updatedFields);

    res.status(200).json({
      message: 'Employee updated successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error...',
      error: error.message
    });
  }
};

*/
