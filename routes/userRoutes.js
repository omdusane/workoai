import { Router } from "express";
import userSchema from "../dtos/userDTO.js"
import validator from "../middlewares/validator.js";
import { getAllUsers,
         createUser, 
         deleteAllUsers, 
         getUserById, 
         updateUser,
         patchUser, 
         deleteUser
        } from "../controllers/userController.js";

const router = Router();

router
    .route("/")
    .get(getAllUsers)
    .post(validator(userSchema),createUser)
    .delete(deleteAllUsers)

router
    .route("/:userId")
    .get(getUserById)
    .put(updateUser)
    .patch(patchUser)
    .delete(deleteUser)

export default router;

