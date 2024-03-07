import express from 'express';
import * as PaysController from '../controller/paysController.js';

const paysRouter = express.Router();

paysRouter.get('/pays', PaysController.listPays);

export default paysRouter;
