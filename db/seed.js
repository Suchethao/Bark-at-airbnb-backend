import {assert} from 'console'
import mongoose from 'mongoose'
import Dogpark from '../models/DogParkSchema.js'
import Airbnb from '../models/AirbnbSchema.js' 
import dogparkdata from './dogpark.json' assert { type: "json" }
import airbnbData from'./NewAirbnb.json' assert { type: "json" }

mongoose.connect('mongodb://127.0.0.1:27017/realestate', { useNewUrlParser: true }).then(
    () => {
      console.log("Database successfully connected");
    }
)
async function seedDate() {
  await Airbnb.deleteMany({});
  await Dogpark.deleteMany({});
  await Airbnb.create(airbnbData);
  await Dogpark.create(dogparkdata);
  process.exit();
}

seedDate();
