
import express from 'express';
import * as AthleteController from '../controller/athleteController.js';
import bodyParser from 'body-parser';
import { isPublic} from '../middleware/authMiddleware.js'

const athleteRouter = express.Router();


athleteRouter.use(bodyParser.urlencoded({ extended: true }));
athleteRouter.use(bodyParser.json());


athleteRouter.get('/athletes', AthleteController.listAthletes);
athleteRouter.get('/athlete/:id', AthleteController.getAthlete);


athleteRouter.get('/athletes/create', AthleteController.getCreateAthleteForm);
athleteRouter.post('/athletes/create', AthleteController.createAthlete);


athleteRouter.get('/athletes/:id/update', AthleteController.getUpdateAthleteForm);

athleteRouter.post('/athletes/:id/update', AthleteController.updateAthlete);

athleteRouter.post('/athletes/:id/delete', AthleteController.deleteAthlete);

athleteRouter.get('/athlete', AthleteController.listAthletesMedail);


athleteRouter.get('/public/athletes',isPublic, AthleteController.listAthletesPublic);
athleteRouter.get('/public/athlete/:id',isPublic, AthleteController.getAthletePublic)
athleteRouter.get('/public/athlete',isPublic, AthleteController.listAthletesMedailPublic);

export default athleteRouter;
