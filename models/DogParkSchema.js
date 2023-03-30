import mongoose from 'mongoose'


// Define the schema for houses, including the subdocument for characters
const dogparkSchema = new mongoose.Schema({
    Name: String,
    neighborhood: String,
    Address: String,
    DogRuns_Type: String,
    Accessible: String,
    });

export default mongoose.model('Dogpark', dogparkSchema)