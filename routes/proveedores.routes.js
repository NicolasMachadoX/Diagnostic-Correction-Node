const {Router} = require('express');
const { proveedoresMedicamentos } = require('../controllers/proveedores.controllers');
const router = Router();

router.get('/proveedoresMed', proveedoresMedicamentos);



module.exports = router;