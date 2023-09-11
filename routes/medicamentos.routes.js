const {Router} = require('express');
const { getMedicinasStock50, getMedicinasProvA, getMedicamentoCaro } = require('../controllers/medicinas.controllers');
const router = Router();

router
.get('/getStockMayor', getMedicinasStock50)
.get('/provA', getMedicinasProvA)
.get('/caro', getMedicamentoCaro);



module.exports = router;