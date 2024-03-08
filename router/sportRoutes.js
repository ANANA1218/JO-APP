
import express from 'express';
import * as SportController from '../controller/sportController.js';
import bodyParser from 'body-parser';
import upload from '../middleware/fileUploadMiddleware.js';
import { isPublic} from '../middleware/authMiddleware.js'

const sportRouter = express.Router();


sportRouter.use(bodyParser.urlencoded({ extended: true }));
sportRouter.use(bodyParser.json());


sportRouter.get('/sports', SportController.listSports);
sportRouter.get('/sport/:id', SportController.getSport);


sportRouter.get('/sports/create', SportController.getCreateSportForm);
sportRouter.post('/sports/create', upload.single('photo'),SportController.createSport);


sportRouter.get('/sports/:id/update', SportController.getUpdateSportForm);

sportRouter.post('/sports/:id/update', SportController.updateSport);

sportRouter.post('/sports/:id/delete', SportController.deleteSport);



sportRouter.get('/public/sports', isPublic,SportController.listSportsPublic);
sportRouter.get('/public/sport/:id', isPublic, SportController.getSportPublic);



export default sportRouter;
