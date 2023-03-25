const passport = require('./config/passport')()
app.use(passport.initialize())

import userController from './controllers/users.js'
app.use('/users', userController)
