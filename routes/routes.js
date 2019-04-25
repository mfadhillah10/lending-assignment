const Joi = require('../validation/joi-validator');

module.exports = function(app) {
    const todolist = require('../controller/controller');

    app.route('/customers').get(todolist.getCustomers);
    app.route('/customer/:id').get(todolist.getCustomerById);
    app.route('/customer').post(Joi, todolist.createCustomer);
    app.route('/updatecustomer/:id').put(todolist.updateCustomer);
}