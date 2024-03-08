import express from "express";
import { connexion, inscription, inscriptionPost, login, logout } from "../controller/connexionController.js";

const connexion_router = express.Router();

connexion_router.get('/connexion/', connexion);
connexion_router.get('/inscription/', inscription);
connexion_router.post('/inscription/', inscriptionPost);
connexion_router.post('/login/', login);
connexion_router.get('/logout/', logout);

export default connexion_router;
