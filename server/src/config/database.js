import mysql from 'mysql2';
import { dbOptions } from './dbConfig.js';

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
