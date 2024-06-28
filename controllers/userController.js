import * as userService from '../services/userService.js'

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    try {
        
        const user = await userService.getUserById(req.params.userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new user
const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user by ID
const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.userId, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Partially update user by ID
const patchUser = async (req, res) => {
    try {
        const user = await userService.patchUser(req.params.userId, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Soft delete user by ID
const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.userId);
        res.status(200).json({"message":  "user deleted successfully"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAllUsers = async (req, res) => {
    try {
        const users = await userService.deleteAllUsers();
        res.status(200).json({"message":"users deleted successfully "})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getUserById, createUser, updateUser, patchUser, deleteUser, deleteAllUsers, getAllUsers}