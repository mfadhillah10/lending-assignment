const response = require('../res/res');
const mappingDao = require('../dao/dao-mapping');

class MappingController {
    constructor(){}

    static async getForm(req, res) {
        try {
            let form = await mappingDao.getForm(req.params['formName'], req.params['formType']);
            response.success(form, res);
        } catch (error) {
            response.err(error, res);
        }
    }
}

module.exports = MappingController;