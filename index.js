import passport from "./config/passport.js";
import express from "express";
import router from "./routes/index.js";

const app = express();
app.use(passport.initialize());
app.use('/users, userController');