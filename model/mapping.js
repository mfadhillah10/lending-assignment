module.exports = (sequelize, type) => {
    return sequelize.define('mapping', {
        mappingId: {
            field: 'mapping_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fieldId: {
            field: 'field_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'field',
                key: 'field_id'
            }
        },
        formId: {
            field: 'form_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'form',
                key: 'form_id'
            }
        },
        isActive: {
            field: 'is_active',
            type: type.INTEGER
        },
        orderNo: {
            field: 'order_no',
            type: type.INTEGER
        }
    }, {
        tableName: 'mapping',
        timestamps: false
    })
}