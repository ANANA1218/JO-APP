
import express from 'express';
import http from 'node:http';
import nunjuks from "nunjucks";
import sportRouter from './router/sportRoutes.js';
import epreurveRouter from './router/EpreuveRoutes.js';
import bodyParser from 'body-parser';
import athleteRouter from './router/AthleteRoutes.js';
import paysRouter from './router/paysRoutes.js';
import session from "express-session";
import connexionRouter from "./router/connexionRoutes.js";
import app_router from './router/app_router.js';

const app = express();
const router = express.Router();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


app.use(router);
app.use(express.json());
app.use(express.static("public")); 

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'njk');

nunjuks.configure('app', {
    autoescape:true,
    noCache:true,
    express: app,
})


 router.use(app_router);
 router.use(sportRouter);
 router.use(epreurveRouter);
 router.use(athleteRouter);
 router.use(paysRouter);
 router.use(connexionRouter)


const server = http.createServer(app);

export default server;