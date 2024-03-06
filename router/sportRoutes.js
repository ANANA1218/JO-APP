
import express from 'express';
import * as SportController from '../controller/sportController.js';
import bodyParser from 'body-parser';

const sportRouter = express.Router();


sportRouter.use(bodyParser.urlencoded({ extended: true }));
sportRouter.use(bodyParser.json());


sportRouter.get('/sports', SportController.listSports);
sportRouter.get('/sport/:id', SportController.getSport);


sportRouter.get('/sports/create', SportController.getCreateSportForm);
sportRouter.post('/sports/create', SportController.createSport);


sportRouter.get('/sports/:id/update', SportController.getUpdateSportForm);

sportRouter.post('/sports/:id/update', SportController.updateSport);

sportRouter.post('/sports/:id/delete', SportController.deleteSport);
export default sportRouter;
