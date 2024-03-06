
import express from 'express';
import * as EpreuveController from '../controller/epreuveController.js';

const epreurveRouter = express.Router();

epreurveRouter.get('/epreuves', EpreuveController.listEpreuves);
epreurveRouter.get('/epreuve/:id', EpreuveController.getSport);

export default epreurveRouter;
