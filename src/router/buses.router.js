const express = require('express');
const { Mostrar, mandar, lista, traer, actualizar, eliminar } = require('../controller/buses.controller');
const router = express.Router();


router.get('/buses', Mostrar)
router.post("/buses/agregar/:id", mandar)
router.get("/buses/lista", lista)
router.get('/buses/eliminar/:id', eliminar)
router.post('/buses/editar/:id', actualizar)
router.get('/buses/editar/:id', traer)
router.get('/buses/eliminar/:id', eliminar)

module.exports = router