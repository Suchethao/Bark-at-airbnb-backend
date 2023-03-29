import mongoose, { Schema, model } from '../db/connection'

const UserSchema = new Schema({
	email: String,
	password: String
})

model('User', UserSchema)

export default mongoose