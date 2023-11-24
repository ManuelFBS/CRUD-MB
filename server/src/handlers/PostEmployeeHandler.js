import { createEmployee } from '../controllers/PostEmployeeController.js';

/**
 * La función crea un nuevo empleado y devuelve un mensaje de éxito con los datos del empleado si tiene
 * éxito, o un mensaje de error si hay un error interno del servidor.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, el cuerpo de la solicitud y los
 * parámetros de la solicitud. Normalmente lo proporciona el marco web o el servidor que maneja la
 * solicitud HTTP.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten configurar el código de estado, los
 * encabezados y enviar el cuerpo de la respuesta. En este fragmento de código, se utiliza para enviar
 * una respuesta JSON con un código de estado.
 * @returns La función `createEmployeeHandler` devuelve la variable `resultado`, que es el resultado de
 * la función `createEmployee`.
 */
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
