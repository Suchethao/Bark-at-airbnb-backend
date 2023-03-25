
import express from "express";
import Airbnb from "./models/AirbnbSchema.js";
import DogPark from "./models/DogParkSchema.js";
import mongoose from "mongoose";
const app = express();
const router = express.Router();


app.use(express.json());

//GET all airBnb

app.get('/', async (req, res) =>{
    return res.redirect('/airbnb')
    // return res.json({ message: "Hello, World ✌️" });
})
app.get('/airbnb', async(req, res) => {
    let allAirbnb = await Airbnb.find({})
    res.json(allAirbnb)

})

//Option 1: 
// use ID from Request and get the document from AirBnb collection
// Then get the location of Airbnb
// Then use the location to run a find on DogPark collection
// Add the dogPark array to the Airbnb result


app.get('/airbnb/:id', async(req, res) => {
    try {
        console.log(req.params)
        const airbnbById = await Airbnb.findById(req.params.Id).lean() // lean allows to modify a Mongoose returned document, or else its immutable
        const airBnbLocation = airbnbById.neighbourhood_group
        const dogParks = await DogPark.find({"Neighbourhood Group Cleansed" : airBnbLocation})
        airbnbById['dogParks'] = dogParks

        res.json(airbnbById)
    } catch(err) {
        console.log("Unexpected Error occurred", err)
        res.json(err)
    }
})


// Option 2: If filtering based on certain parameter like Name and then matching Dogpark location, we can use
// the concept of joins (MongoDB Aggregation)
app.get('/airbnb/name/:name', async(req, res) => {
    try {
        console.log(req.params.name)
        const airbnbs = await Airbnb.aggregate([
            {
                "$match": {name: req.params.name} // matches the exact name from Airbnb and passes the result to second pipeline
                // We can use regex match as well to perform a 'Like' search
            },
            {  // Use result from first stage of pipeline to lookup the Dogpark collection with conditions
                "$lookup": {
                    from: "dogparks",
                    localField: "Neighbourhood Group Cleansed",
                    foreignField: "neighbourhood",
                    as: "dogParks"
                }
            }
        ])
        res.json(airbnbs)
    } catch(err) {
        console.log("Unexpected Error occurred", err)
        res.json(err)
    }

})

app.post('/airbnb', async(req, res) => {
    const airbnb = await Airbnb.create(req.body)
    res.json(airbnb)
})



app.get('/dogparks', async(req, res) =>  {
    let allDogParks = await DogPark.find({})
    res.json(allDogParks)
})


mongoose.connect(
    "mongodb://localhost:27017/realestate"
);

app.listen(3000, () => {
    console.log('running on port 6000')
})