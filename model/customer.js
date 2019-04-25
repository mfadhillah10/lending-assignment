module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        dataId: {
            field: 'data_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        pob: type.STRING,
        dob: type.DATE,
        nik: type.STRING,
        mmn: type.STRING,
        mob: type.STRING,
        npwp: type.STRING,
        customerGroup: {
            field: 'customer_group',
            type: type.STRING
        },
        isActive: {
            field: 'is_active',
            type: type.INTEGER
        }
    }, {
        tableName: 'customer',
        timestamps: false
    })
}