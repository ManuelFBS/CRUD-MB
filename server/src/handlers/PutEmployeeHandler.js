import { updateEmployee } from '../controllers/PutEmployeeController.js';

/**
 * La función `updateEmployeeHandler` es una función asincrónica que maneja la actualización de la
 * información de un empleado y envía una respuesta con los datos actualizados.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, el cuerpo de la solicitud y los
 * parámetros de la solicitud. Es un objeto proporcionado por el marco Express.js.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, los encabezados y enviar el cuerpo de la respuesta.
 */
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
