const passport = require('./config/passport')()

app.use(passport.initialize())
