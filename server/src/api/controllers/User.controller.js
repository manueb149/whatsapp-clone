const { UserModel } = require('../models/User.model');
const result = require('../utils/result.util');
const bcrypt = require('bcrypt');

exports.getUser = async (req, res) => {
    try {
        const users = await UserModel.find({ is_active: true })
        result.success(req, res, 200, users)
    } catch (error) {
        result.error(req, res, 400, 'Hubo un error, usuario no encontrado')
    }  
}

exports.setUser = async (req, res) => {
    try {
        const {name, user, email, password} = req.body;
        const hash = bcrypt.hashSync(password, 10);
        const newUser = new UserModel({
            name,
            user,
            email,
            password: hash
        })
        const response = await newUser.save()
        result.success(req, res, 200, response)
    } catch (error) {
        result.error(req, res, 400, 'Hubo un error, parámetros inválidos')
    }
}

exports.updateUser = async (req, res) => {
    try {
        const response = await UserModel.findByIdAndUpdate(
            {_id: req.params.id}, 
            req.body, 
            {new: true}
        )
        result.success(req, res, 200, response)
    } catch (error) {
        result.error(req, res, 400, 'Hubo un error, datos incorrectos')
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await UserModel.findByIdAndUpdate(
            {_id: req.params.id}, 
            {is_active: false}
        )
        result.success(req, res, 200, 'Tarea borrada')
    } catch (error) {
        result.error(req, res, 400, 'Hubo un error, tarea no borrada')
    }
}