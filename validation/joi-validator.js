const Joi = require('joi');
const Schema = Joi.object().keys({
    name: Joi.string(),
    pob: Joi.string(),
    dob: Joi.date().iso(),
    nik: Joi.number(),
    mmn: Joi.string(),
    mob: Joi.number(),
    npwp: Joi.number()
})

const validation = async (req, res, next) => {
    try {
        await Joi.validate(req.body, Schema);
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = validation;