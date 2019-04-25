const { Field, Form, Mapping } = require('../db/conn');
const formComponent = ['keyfield', 'label', 'datatype', 'required'];

class MappingDao {
    
    static async getForm(formName, formType) {
        try {
            let form = await Field.findAll({
                attributes: formComponent,
                include: [{
                    model: Mapping,
                    required: true,
                    attributes: [],
                    include: [{
                        model: Form,
                        required: true,
                        where: {
                            formName: formName,
                            type: formType,
                            isActive: 1
                        }
                    }]
                }]
            })
            return form;
        } catch (error) {
            return error;
        }
    }
}

module.exports = MappingDao;