import {User} from '../models/userModel.js'
import { isValidObjectId } from 'mongoose';
const getAllUsers = async() => {
    try {
        return await User.find({});
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
}

const createUser = async (userData) => {
    try {
        const user = new User(userData);
        return await user.save();
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

const deleteAllUsers = async () => {
    try {
        return await User.deleteMany({})
    } catch (error) {
        throw new Error("Error while deleting all users: " + error.message)
    }
}

const getUserById = async(userId)=>{
    try {
        if (!isValidObjectId(userId)) throw new Error("Invalid user id")
        const user = await User.findById(userId);
        
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
}

const updateUser = async (userId, updateData) => {
    try {
        if (!isValidObjectId(userId)) throw new Error("Invalid user id")
        const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

const patchUser = async (userId, updateData) => {
    try {
        if (!isValidObjectId(userId)) throw new Error("Invalid user id")
        const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Error patching user: ' + error.message);
    }
};

const deleteUser = async (userId) => {
    try {
        if (!isValidObjectId(userId)) throw new Error("Invalid user id")
        const user = await User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
};

export { getAllUsers, createUser, deleteAllUsers, getUserById, updateUser, patchUser, deleteUser };
