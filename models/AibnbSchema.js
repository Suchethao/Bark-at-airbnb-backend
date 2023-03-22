import mongoose from 'mongoose'

// Define the schema for airbnb
const airbnbSchema = new mongoose.Schema({
    name: String,
    host_name: String,
    neighbourhood_group: String,
    neighbourhood: String,
    room_type: String,
    price: Number,
    minimum_nights: Number,
    number_of_review: Number,
})

export default mongoose.model('Airbnb', airbnbSchema ) 