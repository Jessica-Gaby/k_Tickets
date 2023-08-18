const detalle_encomienda = {};
const orm = require ('../Base de datos/BaseDatos.orm')
const sql = require ('../Base de datos/BaseDatos.sql')

detalle_encomienda.mostrar = async(req, res) => {
    res.render('detalle_encomienda/agregar');
};

detalle_encomienda.mandar = async(req, res) => {

    const { nombres_cooperativa_detalle_encomienda,tamaño_detalle_encomienda,fecha_envio_detalle_encomienda,numero_registro_detalle_encomienda,peso_detalle_encomienda } = req.body
    const nuevoDetalle_encomienda = {
        nombres_cooperativa_detalle_encomienda,
        tamaño_detalle_encomienda,
        fecha_envio_detalle_encomienda,
        numero_registro_detalle_encomienda,
        peso_detalle_encomienda
    }

    await orm.detalle_encomienda.create(nuevoDetalle_encomienda)

    req.flash('success', 'Guardado con éxito')
    res.redirect('/detalle_encomienda/lista')
}

detalle_encomienda.lista = async(req, res) => {
    const lista = await sql.query('select * from detalle_encomienda')
    res.render('detalle_encomienda/lista', { lista })
}

detalle_encomienda.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from detalle_encomienda where id_detalle_encomienda=?', [ids])
    res.render('detalle_encomienda/editar', { lista })
}


detalle_encomienda.actualizar = async(req, res) => {

    const { id_detalle_encomienda,nombres_cooperativa_detalle_encomienda,tamaño_detalle_encomienda,fecha_envio_detalle_encomienda,numero_registro_detalle_encomienda,peso_detalle_encomienda} = req.body
    const nuevoDetalle_encomienda = {
        nombres_cooperativa_detalle_encomienda,
        tamaño_detalle_encomienda,
        fecha_envio_detalle_encomienda,
        numero_registro_detalle_encomienda,
        peso_detalle_encomienda
    }
    await orm.detalle_encomienda.findOne({ where: { id_detalle_encomienda: id_detalle_encomienda } })
        .then(actualizar => {
            actualizar.update(nuevoDetalle_encomienda)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/detalle_encomienda/lista')
}

detalle_encomienda.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.detalle_encomienda.destroy({ where: { id_detalle_encomienda: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/detalle_encomienda/lista')
        })
}

module.exports = detalle_encomienda