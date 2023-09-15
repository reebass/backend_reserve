const Joi = require('joi');
const {Schema, model} = require('mongoose')

const classSchema = new Schema({
    name: String,
})

const Class = model('class', classSchema);



const addSchema = Joi.object({
    name: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(5).max(50),
    email: Joi.string().email(),
    phone: Joi.string().min(10).max(12),
    shop: Joi.number().required(),
    jobTitle: Joi.string(),
    avatar: Joi.string()
})

module.exports = Class