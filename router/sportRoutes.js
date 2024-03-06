
import express from 'express';
import * as SportController from '../controller/sportController.js';

const sportRouter = express.Router();

sportRouter.get('/sports', SportController.listSports);
sportRouter.get('/sports/:id', SportController.getSport);

export default sportRouter;
