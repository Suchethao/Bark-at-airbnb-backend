import mongoose, { Schema, model } from '../db/connection.js'

const UserSchema = new Schema({
	email: String,
	password: String
})

model('User', UserSchema)

export default mongoose