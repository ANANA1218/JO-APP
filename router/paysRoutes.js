import express from 'express';
import * as PaysController from '../controller/paysController.js';
import { isPublic} from '../middleware/authMiddleware.js'
const paysRouter = express.Router();

paysRouter.get('/pays', PaysController.listPays);

paysRouter.get('/public/pays',isPublic, PaysController.listPaysPublic);

export default paysRouter;
