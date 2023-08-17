const express = require('express');
const { Mostrar, mandar, lista, traer, actualizar, eliminar } = require('../controller/choferes.controller');
const router = express.Router();


router.get('/chofer', Mostrar)
router.post("/chofer/agregar/:id", mandar)
router.get("/chofer/lista", lista) 
router.get('/chofer/eliminar/:id', eliminar)
router.post('/chofer/editar/:id', actualizar)
router.get('/chofer/editar/:id', traer)
router.get('/chofer/eliminar/:id', eliminar)

module.exports = router