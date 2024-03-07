import express from 'express';
import * as PaysController from '../controller/paysController.js';

const paysRouter = express.Router();

paysRouter.get('/pays', PaysController.listPays);

paysRouter.get('/public/pays', PaysController.listPaysPublic);

export default paysRouter;
