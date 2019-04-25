const Sequlize = require('sequelize');
const CustomerModel = require('../model/customer');
const FieldModel = require('../model/field');
const FormModel = require('../model/form');
const MappingModel = require('../model/mapping');

const dbconfig = new Sequlize('lending', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 300,
        idle: 100
    }
})

const Customer = CustomerModel(dbconfig, Sequlize);
const Field = FieldModel(dbconfig, Sequlize);
const Form = FormModel(dbconfig, Sequlize);
const Mapping = MappingModel(dbconfig, Sequlize);
Field.hasMany(Mapping, {foreignKey: 'field_id', sourceKey: 'fieldId'});
Mapping.belongsTo(Field, {foreignKey: 'field_id', targetKey: 'fieldId'});
Mapping.belongsTo(Form, {foreignKey: 'form_id', targetKey: 'formId'});

module.exports = {
    Customer,
    Field,
    Form,
    Mapping
}