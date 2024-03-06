
import express from 'express';
import * as EpreuveController from '../controller/epreuveController.js';
import bodyParser from 'body-parser';

const epreurveRouter = express.Router();

epreurveRouter.use(bodyParser.urlencoded({ extended: true }));
epreurveRouter.use(bodyParser.json());



epreurveRouter.get('/epreuves', EpreuveController.listEpreuves);
epreurveRouter.get('/epreuve/:id', EpreuveController.getEpreuve);



epreurveRouter.get('/epreuves/create', EpreuveController.getCreateEpreuveForm);
epreurveRouter.post('/epreuves/create', EpreuveController.createEpreuve);


epreurveRouter.get('/epreuves/:id/update', EpreuveController.getUpdateEpreuveForm);

epreurveRouter.post('/epreuves/:id/update', EpreuveController.updateEpreuve);

epreurveRouter.post('/epreuves/:id/delete', EpreuveController.deleteEpreuve);


export default epreurveRouter;
