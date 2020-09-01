const Joi = require('joi');
const result = require('../utils/result.util');

const UserSchemaValidator = Joi.object({
    name: Joi.string().min(5).required(),
    user: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().min(5).email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

exports.post = (req, res, next) => {
    const { error } = UserSchemaValidator.validate(req.body, { abortEarly: false })
    if(!error){
        next()
    }else{
        result.error(req, res, 400, error.details.map( result => result.message))
    }
}