import express from 'express';


const app_router = express.Router();

app_router.get('/', (req, res) =>{
    return res.send('app_router');
    });


export default app_router;