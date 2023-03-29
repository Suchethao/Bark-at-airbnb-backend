import express from 'express';
import jwt from 'jwt-simple';
import passport from './config/passport.js';
import config from './config/config.js';
import User from '../models/userSchema.js';
const router = Router();
const user = model('User');

router.post('/signup', (req, res) => {
    if (req.body.email && req.body.password) {
      let newUser = {
        email: req.body.email,
        password: req.body.password
      }
      user.findOne({ email: req.body.email })
        .then((user) => {
          if (!user) {
            user.create(newUser)
              .then(user => {
                if (user) {
                  var payload = {
                    id: newUser.id
                  }
                  var token = jwt.encode(payload, config.jwtSecret)
                  res.json({
                    token: token
                  })
                } else {
                  res.sendStatus(401)
                }
              })
          } else {
            res.sendStatus(401)
          }
        })
    } else {
      res.sendStatus(401)
    }
  })
  


export default router

