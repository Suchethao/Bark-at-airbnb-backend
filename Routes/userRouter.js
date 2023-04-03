import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);

export default userRouter;