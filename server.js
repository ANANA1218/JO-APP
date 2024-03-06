//import des packages
import express from 'express';
import http from 'node:http';
import app_router from './router/app_router.js';
import nunjuks from "nunjucks";

//instancier express et un routeur
const app = express();
const router = express.Router();


app.use(router);
app.use(express.json());
app.use(express.static("public")); 


nunjuks.configure('app', {
    autoescape:true,
    noCache:true,
    express: app,
})



 router.use(app_router);


const server = http.createServer(app);

export default server;