const express = require('express');
const { Mostrar, mandar} = require('../controller/router.controller');
const router = express.Router();


router.get('/router', Mostrar)
router.post("/router/agregar/:id", mandar)

module.exports = router