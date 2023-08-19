const detalleEncomienda =(sequelize, type) =>{
    return sequelize.define('detalleencomiendas',{
        id_detalleencomienda:{
            type: type.INTEGER, 
            primarykey: true,
            autoIncrement: true
        },
        nombreCooperativaDetalleEncomienda: type.STRING,
        tamañoDetalleEncomienda: type.INTEGER,
        fechaEnvioDetalleEncomienda: type.STRING,
        nroRegistroTransporteDetalleEncomienda: type.INTEGER,
        pesoDetalleEncomienda: type.INTEGER,

    crearDetalleEncomienda: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false 
        },
        actualizarDetalleEncomienda: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }   
    }, {
        timestamps: false, 

    })
}
module.exports = detalleEncomienda