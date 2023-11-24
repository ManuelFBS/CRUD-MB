import dotenv from 'dotenv';

dotenv.config();

/* El código exporta una variable constante llamada "dbOptions". Esta variable contiene un objeto con
propiedades "host", "puerto", "usuario", "contraseña" y "base de datos". Los valores de estas
propiedades se recuperan de las variables de entorno utilizando `process.env`. Es probable que este
código se use para almacenar opciones de conexión a la base de datos, como el host, el puerto, el
nombre de usuario, la contraseña y el nombre de la base de datos, en un archivo separado para
facilitar la configuración y la reutilización. */
export const dbOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};
