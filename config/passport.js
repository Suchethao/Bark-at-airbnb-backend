import passport from "passport";
import passportJWT from "passport-jwt";
import { jwtSecret } from "./config.js";
import User from '../models/userSchema.js';
import mongoose from "../db/connection.js";

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;


const params = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

async function findUserById(id) {
  try {
    return await User.findById(id);
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function passportFunction() {
  let strategy = new Strategy(params, async (payload, callback) => {
    let user = await findUserById(payload.id);
    if (user) {
      return callback(null, { id: user.id });
    } else {
      return callback(new Error('User not found'), null);
    }
  });

  passport.use(strategy)

  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return _authenticate('jwt', { session: false })
    }
  }
}
