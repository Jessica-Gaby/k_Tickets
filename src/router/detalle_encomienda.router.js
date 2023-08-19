const express = require ('express');
const {  actualizar, eliminar } = require ('../controller/detalle_encomienda.controller');
const router = express.Router();


router.post ('/', actualizar)
router.get ('/', eliminar)

module.exports = router