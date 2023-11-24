import { Router } from 'express';

export const routes = Router();

const prefix = '/api';

routes.get(prefix, (rer, res) => {
  res.send('Welcome to the API Rest Employee...!!!');
});
