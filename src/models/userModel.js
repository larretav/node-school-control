// models/userModel.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Obtener todos los usuarios
const getUsers = async () => {
  return prisma.user.findMany();
};

// Obtener un usuario por su ID
const getUserById = async (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

// Crear un nuevo usuario
const createUser = async (userData) => {
  return prisma.user.create({
    data: userData,
  });
};

// Actualizar un usuario existente
const updateUser = async (userId, userData) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: userData,
  });
};

// Eliminar un usuario
const deleteUser = async (userId) => {
  return prisma.user.delete({
    where: {
      id: userId,
    },
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
