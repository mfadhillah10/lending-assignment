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

exports.search = function(req, res) {
    dao.getForm(req.params['formName'], req.params['formType'], function(error, data) {
        if(error) {
            console.log(error);
            response.err(error, res);
        } else {
            dao.search((`%${req.body.nik}%`), req.params['formName'], function(error, data2) {
                if(error) {
                    console.log(error);
                    response.err(error, res);
                } else {
                    response.list(data, data2, res);
                }
            });
        }
    });
}

exports.getForm = function(req,res){
    dao.getForm(req.params['formName'],req.params['formType'],function(error,data){
        if(error){
            console.log(error);
            response.err(error,res);
        } else if(req.params['formType']=="Form"){
            response.ok(data,res);
        } else if (req.params['formType']=="List"){
            dao.getAll(req.params['formName'],function(error,data2){
                if(error){
                    console.log(error);
                    response.err(error,res);
                } else {
                    response.list(data,data2,res);
                }
            });
        }
    });
}

exports.getCust = function(req, res) {
    dao.getCust(function(error, data) {
        if(error) {
            response.err(error, res);
        } else {
            response.ok(data, res);
        }
    });
}

exports.getFormValue = function(req, res) {
    dao.getCustomer(req.params['id'], function(error, data) {
        if(error) {
            console.log(error);
            response.err(error, res);
        } else {
            dao.getForm(req.params['formName'], req.params['formType'], function(error, data2) {
                if(error) {
                    console.log(error);
                    response.err(error, res);
                } else {
                    for(var k in data[0]) {
                        for(var i = 0; i < data2.length; i++) {
                            if(data2[i].keyfield == k) {
                                data2[i].value = data[0][k];
                            }
                        }
                    }
                    response.ok(data2, res);
                }
            });
        }
    });
}

exports.insert = function(req, res) {
    dao.insert(req.params['tableName'], req.params['customerGroup'], req.body, function(error, data) {
        if(error) {
            console.log(error);
            response.err(error, res);
        } else {
            response.success(data, res);
        }
    });
}

exports.updateData = function(req, res) {
    dao.updateData(req.params['tableName'], req.body, req.params['id'], function(error, data) {
        if(error) {
            response.err(error, res);
        } else {
            response.success(data, res);
        }
    });
}

exports.delete = function(req, res) {
    dao.del(req.params['id'], function(error, data) {
        if(error) {
            response.err(error, res);
        } else {
            response.ok(data, res);
        }
    });
}