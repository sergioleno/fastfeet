import { Router } from 'express';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'hello world' }));

routes.post('/users', UserController.store);
routes.post('/recipient', RecipientController.store);

export default routes;
