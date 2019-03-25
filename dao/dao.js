var connection = require('../db/conn');

const sqlGetForm = `SELECT field.keyfield,field.label,field.datatype,field.required, form.columns FROM mapping 
                    INNER JOIN form on mapping.form_id=form.form_id 
                    INNER JOIN field on mapping.field_id=field.field_id 
                    WHERE form.form_name=? AND form.type=? AND form.is_active='1' ORDER BY mapping.order_no ASC`;

const sqlGetMap = `SELECT field.field_id, field.keyfield, field.label, field.datatype, field.required FROM mapping 
                   INNER JOIN form ON mapping.form_id = form.form_id
                   INNER JOIN field on mapping.field_id = field.field_id
                   WHERE form.form_name = ?`;

const sqlInsert = `INSERT INTO ?? SET customer_group = ?, ?`;
const sqlUpdate = `UPDATE ?? SET ? WHERE data_id = ?`;
const sqlGetCust = `SELECT name, pob, dob, nik, mmn, mob, npwp FROM customer`;
const sqlGetCustomer = `SELECT name, pob, dob, nik, mmn, mob, npwp FROM customer WHERE data_id = ?`;
const sqlGetCustomerAll = `SELECT data_id, name, dob, pob, nik, mmn, mob,npwp FROM customer WHERE customer_group=? and is_active='1'`;
const sqlDelete = `UPDATE customer SET is_active = "0" WHERE data_id = ?`;
const sqlSearch = `SELECT data_id, name, dob, pob, nik, mmn, mob, npwp FROM customer WHERE nik LIKE ? AND customer_group = ? AND is_active = '1'`;

exports.getMap = function getMap(map, callback) {
    connection.query(sqlGetMap, map, function(error, rows) {
        if(error) {
            console.log(error);
            return callback(error);
        }
        callback(null, rows);
    })
}

exports.search = function(nik, formName, callback) {
    connection.query(sqlSearch, [nik, formName], function(error, rows) {
        if(error) {
            console.log(error);
            return callback(error);
        }
        callback(null, rows);
    });
}

exports.getForm = function(formName, formType, callback) {
    connection.query(sqlGetForm, [formName, formType], function(error,data){
        if(error){
            return callback(error);
        }
        callback(null,data);
    })
}

exports.getCust = function(callback) {
    connection.query(sqlGetCust, function(error, data) {
        if(error) {
            return callback(error);
        }
        callback(null, data);
    });
}

exports.getCustomer = function(id, callback) {
    connection.query(sqlGetCustomer, id, function(error, data) {
        if(error) {
            return callback(error);
        }
        callback(null, data);
    });
}

exports.getAll = function(formName,callback){
    connection.query(sqlGetCustomerAll,formName,function(error,data){
        if(error){
            return callback(error);
        }
        callback(null,data);
    })
}

exports.insert = function(tableName, customerGroup, data, callback) {
    connection.query(sqlInsert, [tableName, customerGroup, data], function(error, data) {
        if(error) {
            return callback(error);
        }
        callback(null, data);
    });
}

exports.updateData = function(tableName, data, id, callback) {
    connection.query(sqlUpdate, [tableName, data, id], function(error, data) {
        if(error) {
            console.log(error);
            return callback(error);
        }
        callback(null, data);
    });
}

exports.del = function(id, callback) {
    connection.query(sqlDelete, id, function(error, rows) {
        if(error) {
            return callback(error);
        }
        callback(null, rows);
    });
}
