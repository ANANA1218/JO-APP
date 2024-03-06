//import des packages
import express from 'express';
import http from 'node:http';
import nunjuks from "nunjucks";
import sportRouter from './router/sportRoutes.js';

//instancier express et un routeur
const app = express();
const router = express.Router();


app.use(router);
app.use(express.json());
app.use(express.static("public")); 

app.set('view engine', 'njk');

nunjuks.configure('app', {
    autoescape:true,
    noCache:true,
    express: app,
})



 router.use(sportRouter);


const server = http.createServer(app);

export default server;