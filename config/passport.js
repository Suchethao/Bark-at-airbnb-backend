import passport from "passport";
import passportJWT, {ExtractJwt} from "passport-jwt";
import { jwtSecret } from "./config.js";
import { model } from '../models/userSchema.js';
import mongoose from "../db/connection.js";

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const User = model('User')

const params = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

export function passportFunction() {
  let strategy = new Strategy(params, (payload, callback) => {
    let user = User.findById(payload.id) || null
    if (user) {
      return callback(null, { id: user.id })
    } else {
      return callback(new Error('User not found'), null)
    }
  })

  passport.use(strategy)

  return {
    initialize: function () {
      return _initialize()
    },
    authenticate: function () {
      return _authenticate('jwt', { session: false })
    }
  }
}
