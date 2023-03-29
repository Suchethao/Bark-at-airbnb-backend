import express from "express";
import user from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", user.login);

export default userRouter;