import mongoose from '../db/connection.js'

const Schema = mongoose.Schema;
const User = new Schema({
  email: String,
  password: String
})

export default mongoose.model ("User", User)
