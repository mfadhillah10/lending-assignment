'use strict'

module.exports = function(app) {
    var controller = require('../controller/controller');

    app.route('/api/mapping/:map').get(controller.getMapping);
    app.route('/api/customers').get(controller.getCust);
    app.route('/api/customer/:id').get(controller.getCustId);
    app.route('/api/customer').post(controller.insert);
    app.route('/api/:formName/:formType').get(controller.getVal);
    app.route('/api/customer/:id').put(controller.delete);
}