import express from 'express';
// import mysql from 'mysql';
// import myconn from 'express-myconnection';
import cors from 'cors';
import morgan from 'morgan';
// import { dbOptions } from './config/db.mjs';
// import indexRouter from './routes/index.route.mjs';

const app = express();

app.set('port', process.env.PORT || 8000);

// Middlewares... --------------------------------------------------------------------------------------------------------
// app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.listen(app.get('port'), () => {
  console.log('Server is running on port: ', app.get('port'));
});
