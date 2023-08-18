const express = require ('express');
const { Mostrar, mandar, listar, traer, actualizar, eliminar } = require ('../controller/detalle_encomienda.controller');
const router = express.Router();

router.get ('/', Mostrar)
router.post ('/', mandar)
router.get ('/', listar)
router.get ('/', traer)
router.post ('/', actualizar)
router.get ('/', eliminar)

module.exports = router