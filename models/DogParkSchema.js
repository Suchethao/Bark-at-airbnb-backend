import mongoose from 'mongoose'


// Define the schema for houses, including the subdocument for characters
const dogparkSchema = new mongoose.Schema({
    "Prop_ID": String,
    "Name": String,
    "neighborhood": String,
    "Address": String,
    "DogRuns_Type": String,
    "Accessible": String,
    "Notes": String,
    });

export default mongoose.model('Dogpark', dogparkSchema)