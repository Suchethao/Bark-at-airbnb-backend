import { use, initialize as _initialize, authenticate as _authenticate } from 'passport'
import { ExtractJwt as _ExtractJwt, Strategy as _Strategy } from 'passport-jwt'
const ExtractJwt = _ExtractJwt
const Strategy = _Strategy

import { jwtSecret } from './config'

import { model } from '../models/User'
const User = model('User')

const params = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

export default function () {
  let strategy = new Strategy(params, (payload, callback) => {
    let user = User.findById(payload.id) || null
    if (user) {
      return callback(null, { id: user.id })
    } else {
      return callback(new Error('User not found'), null)
    }
  })

  use(strategy)

  return {
    initialize: function () {
      return _initialize()
    },
    authenticate: function () {
      return _authenticate('jwt', { session: false })
    }
  }
}
