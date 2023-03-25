import mongoose from 'mongoose';

const airbnbSchema = new mongoose.Schema({
  name: String,
  summary: String,
  space: String,
  description: String,
  transit: String,
  access: String,
  picture_url: {
    thumbnail: Boolean,
    color_summary: [String],
  },
  xl_picture_url: {
    type: String,
    required: true,
  },
  street: String,
  neighbourhood: String,
  neighbourhood_cleansed: String,
  neighbourhood_group_cleansed: String,
  city: String,
  state: String,
  zipcode: String,
  market: String,
  smart_location: String,
  country_code: String,
  country: String,
  price: Number,
  review_scores_rating: Number,
  geolocation: {
    lon: Number,
    lat: Number,
  },
});

export default mongoose.model('Airbnb', airbnbSchema);
