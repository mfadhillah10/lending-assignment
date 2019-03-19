var connection = require('../db/conn');

const sqlGetFormVal = `SELECT field.keyfield, field.label, field.datatype, field.required FROM mapping
INNER JOIN form ON mapping.form_id = form.form_id INNER JOIN field ON mapping.field_id = field.field_id
WHERE form.form_name = ? AND form.type = ? AND form.is_active = "1"`;

const sqlGetMap = `SELECT field.field_id, field.keyfield, field.label, field.datatype, field.required FROM mapping 
INNER JOIN form ON mapping.form_id = form.form_id INNER JOIN field on mapping.field_id = field.field_id
WHERE form.form_name = ?`;

const sqlInsert = `INSERT INTO ?? SET ?`;
const sqlGetCust = `SELECT name, pob, dob, nik, mmn, mob, npwp FROM customer`;
const sqlGetCustId = `SELECT name, pob, dob, nik, mmn, mob, npwp FROM customer WHERE data_id = ?`;
const sqlDelete = `UPDATE customer SET is_active = "0" WHERE data_id = ?`;

exports.getMap = function getMap(map, callback) {
    connection.query(sqlGetMap, map, function(error, rows) {
        if(error) {
            console.log(error);
            return callback(error);
        }
        callback(null, rows);
    })
}

exports.getVal = function(formName, formType, callback) {
    connection.query(sqlGetFormVal, [formName, formType], function(error, rows) {
        if(error) {
            return callback(error);
        }
        callback(null, rows);
    })
}

exports.getCust = function(callback) {
    connection.query(sqlGetCust, function(error, rows) {
        if(error) {
            return callback(error);
        }
        callback(null, rows);
    });
}

exports.getCustId = function(id, callback) {
    connection.query(sqlGetCustId, id, function(error, rows) {
        if(error) {
            return callback(error);
        }
        callback(null, rows);
    })
}

exports.insert = function(data, callback) {
    connection.query(sqlInsert, data, function(error, rows) {
        if(error) {
            return callback(error);
        }
        callback(null, rows);
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
