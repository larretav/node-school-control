// controllers/userController.js
const userModel = require('../models/userModel');

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los usuarios' });
  }
};

// Obtener un usuario por su ID
const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userModel.getUserById(userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener el usuario' });
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await userModel.createUser(userData);
    res.json(newUser);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el usuario' });
  }
};

// Actualizar un usuario existente
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  try {
    const updatedUser = await userModel.updateUser(userId, userData);
    res.json(updatedUser);
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar el usuario' });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  const userId = +req.params.id;

  try {
    await userModel.deleteUser(userId);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar el usuario' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
