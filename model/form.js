module.exports = (sequelize, type) => {
    return sequelize.define('form', {
        formId: {
            field: 'form_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        formName: {
            field: 'form_name',
            type: type.STRING,
        },
        type: type.STRING,
        columns: type.INTEGER,
        isActive: {
            field: 'is_active',
            type: type.INTEGER
        }
    }, {
        tableName: 'form',
        timestamps: false
    })
}