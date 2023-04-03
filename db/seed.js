import {assert} from 'console'
import mongoose from './connection.js'
import Dogpark from '../models/DogParkSchema.js'
import Airbnb from '../models/AirbnbSchema.js' 
import dogparkdata from './dogpark.json' assert { type: "json" }
import airbnbData from'./Newairbnb.json' assert { type: "json" }

// // Assume you have an array of objects called listings
// for (let i = 0; i < airbnbData.length; i++) {
//   const listing = airbnbData[i];
//   if (airbnbData["xl_picture_url"]=== "null") {
//   // If xl_picture_url is "null", skip to the next object
//   continue;
//   }
// }
async function seedData() {
  await Airbnb.deleteMany({});
  await Dogpark.deleteMany({});
  const filteredAirbnbData = airbnbData.filter(listing => listing.xl_picture_url !== null);
  await Airbnb.create(filteredAirbnbData);
  await Dogpark.create(dogparkdata);

  process.exit();
}

seedData();
