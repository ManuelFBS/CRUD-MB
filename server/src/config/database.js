import mysql from 'mysql2';
import { dbOptions } from './dbConfig.js';

/**
 * La función `executeQuery` ejecuta una consulta SQL con los valores proporcionados y devuelve una
 * promesa que se resuelve con los resultados de la consulta o la rechaza con un mensaje de error.
 * @param query - El parámetro `query` es una cadena que representa la consulta SQL que desea ejecutar.
 * Puede ser cualquier declaración SQL válida, como SELECCIONAR, INSERTAR, ACTUALIZAR, ELIMINAR, etc.
 * @param values - El parámetro `values` es una matriz que contiene los valores que se utilizarán en la
 * consulta. Estos valores se utilizan para reemplazar los marcadores de posición en la cadena de
 * consulta. Por ejemplo, si su cadena de consulta contiene un marcador de posición como `?`, puede
 * pasar el valor correspondiente en la matriz `values`. El
 * @returns La función `executeQuery` devuelve una Promesa.
 */
export const executeQuery = (query, values) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(dbOptions);

    connection.connect();

    connection.query(query, values, (err, results) => {
      connection.end;

      if (err) {
        console.error('Error executing query', err);
        reject('Internal Server Error');
      } else {
        resolve(results);
      }
    });
  });
};
