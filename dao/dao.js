const { Customer } = require('../db/conn');

class CustomerDao {
    
    constructor(){}

    static async selectAll() {
        try {
            let allData = await Customer.findAll();
            return allData;
        } catch (error) {
            return error;
        }
    }

    static async selectId(id) {
        try {
            let data = await Customer.findByPk(id);
            return data;
        } catch (error) {
            return error;
        }
    }

    static async insert(data) {
        try {
            let insertData = await Customer.create(data);
            return insertData;
        } catch (error) {
            return error;
        }
    }

    static async update(id, data) {
        try {
            let updateData = await Customer.update(data, {
                where: { idCustomer: id },
                returning: true,
                plain: true
            });
            return updateData;
        } catch (error) {
            return error;
        }
    }
}

module.exports = CustomerDao;