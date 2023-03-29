import express from 'express';
import jwt from 'jwt-simple';
import {passportFunction} from './config/passport.js';
import {jwtSecret, jwtSession} from '../config/config.js';
import User from '../models/userSchema.js';

const userController = {
login: (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({email: req.body.email}).then(user) => {
      if (user) {
        if (user.password === req.body.password) {
          var payload = {
            id: user.id,
          };
          var token = jwt.encode(payload, jwtSecret);
          res.json({
            token: token,
          });
        } else {
          console.log("wrong email or password");
          res.sendStatus(401);
          }
        } else {
          console.log ("user does not exist");
          res.sendStatus(401);
        }
      }
    }
  }
}
    
export default userController

