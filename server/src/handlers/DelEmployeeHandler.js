import { deleteEmployee } from '../controllers/DelEmployeeController.js';

export const deleteEmployeeHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteEmployee(id);

    res.status(200).json({
      message: 'Employee has been deleted...',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error...!!!'
    });
  }
};
