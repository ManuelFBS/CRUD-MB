import express from 'express';
import mysql from 'mysql2';
import myconn from 'express-myconnection';
import cors from 'cors';
import morgan from 'morgan';
import { dbOptions } from './config/db.js';
import { routes } from './routes/index.route.js';

const app = express();

app.set('port', process.env.PORT || 8000);

// Middlewares... --------------------------------------------------------------------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes... -----------------------------------------------------------------------------------------------------------------
// app.use('/', indexRouter);

app.listen(app.get('port'), () => {
  console.log('Server is running on port: ', app.get('port'));
  console.log('Connecting with database...');
});
