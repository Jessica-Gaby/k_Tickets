const licencia = (sequelize, type) => {
    return sequelize.define('licencias', {
        id_licencia: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_licencia: type.STRING,
        fecha_emision_licencia: type.STRING,
        fecha_vencimiento_licencia: type.STRING,
      

        crearLicencia: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarLicencia: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = licencia