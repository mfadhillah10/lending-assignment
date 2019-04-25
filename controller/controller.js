var response = require('../res/res');
var dao = require('../dao/dao');

class CustomerController {
    constructor(){}

    static async getCustomers(req, res) {
        try {
            let customers = await dao.selectAll();
            res.status(200).send(customers);
        } catch (error) {
            res.status(500);
            res.send(error);
        }
    }

    static async getCustomerById(req, res) {
        try {
            let customer = await dao.selectId(req.params['id']);
            if(!customer) {
                response.noData(null, res);
                return;
            }
        } catch (error) {
            response.err(error, res);
        }
    }

    static async createCustomer(req, res) {
        try {
            let newCustomer = await dao.insert(req.body);
            response.success(newCustomer, res);
        } catch (error) {
            res.status(401);
            res.json(error);
        }
    }

    static async updateCustomer(req, res) {
        try {
            let customer = await dao.selectId(req.params['id']);
            if(!customer) {
                response.noData(null, res);
                return;
            }
            let updatedCustomer = await dao.update(customer.idCustomer, req.body);
            response.success(updatedCustomer, res);
        } catch (error) {
            response.err(error, res);
        }
    }
}

module.exports = CustomerController;