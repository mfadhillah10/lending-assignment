'use strict'

module.exports = function(app) {
    var todolist = require('../controller/controller');

    // app.route('/api/mapping/:map').get(todolist.getMapping);
    app.route('/api/customers').get(todolist.getCust);
    app.route('/api/:formName/:formType/:id').get(todolist.getFormValue);
    app.route('/api/:tableName/:customerGroup').post(todolist.insert);
    app.route('/api/:tableName/:id').put(todolist.updateData);
    app.route('/api/:formName/:formType').get(todolist.getForm);
    app.route('/api/customer/:id').put(todolist.delete);
    app.route('/api/search/:formName/:formType').post(todolist.search);
}