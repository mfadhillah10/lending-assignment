var response = require('../res/res');
var dao = require('../dao/dao');

exports.getMapping = function(req, res) {
    dao.getMap(req.params['map'], function(error, rows) {
        if(error) {
            response.err(error, res);
        } else {
            response.ok(rows, res);
        }
    });
}

exports.getVal = function(req, res) {
    dao.getVal(req.params['formName'], req.params['formType'], function(error, data) {
        if(error) {
            response.err(error, res);
        } else {
            response.col(data, res);
        }
    });
}

exports.getCust = function(req, res) {
    dao.getCust(function(error, rows) {
        if(error) {
            response.err(error, res);
        } else {
            response.ok(rows, res);
        }
    });
}

exports.getCustId = function(req, res) {
    dao.getCustId(req.params['id'], function(error, rows) {
        if(error) {
            response.err(error, res);
        } else {
            response.ok(rows, res);
        }
    });
}

exports.insert = function(req, res) {
    dao.insert(req.body, function(error, data) {
        if(error) {
            response.err(error, res);
        } else {
            response.ok(data, res);
        }
    });
}

exports.delete = function(req, res) {
    dao.del(req.params['id'], function(error, rows) {
        if(error) {
            response.err(error, res);
        } else {
            response.ok(rows, res);
        }
    });
}