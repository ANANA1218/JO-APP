import express from 'express';

const app_router = express.Router();

app_router.get('/', (req, res) =>{
    return res.redirect('/connexion');
});

export default app_router;
