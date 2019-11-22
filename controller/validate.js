const Joi = require('@hapi/joi');

// Validating the User Data
const registerValidation = (data) =>{
    const schema = {
        name: Joi.string().min(6).required(),
        email : Joi.string().min().required(),
        password : Joi.string().min(1).required()
    };
    return Joi.validate(data, schema);
};

const loginValidation = (data) =>{
    const schema = {
        email : Joi.string().min().required(),
        password : Joi.string().min(1).required()
    };
    return Joi.validate(data, schema);
};

module.exports = {
    registerValidation,
    loginValidation
}