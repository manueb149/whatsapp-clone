const router = require('express').Router()
const UserController = require('../controllers/User.controller');
const usersValidator = require('../middlewares/users.middleware');

// Obtener los usuarios
router.get(
    '/',
    UserController.getUser
)

// Agregar un usuario
router.post(
    '/',
    usersValidator.post,
    UserController.setUser
)

// Actualizar un usuario
router.put(
    '/:id',
    UserController.updateUser
)

// Eliminar un usuario
router.delete(
    '/:id',
    UserController.deleteUser
)

module.exports = router