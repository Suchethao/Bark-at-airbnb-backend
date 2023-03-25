import mongoose from 'mongoose';

const airbnbSchema = new mongoose.Schema(

    {    
    name:String,
    summary:String,
    space:String,
    description:String,
    transit:String,
    access:String,
    picture_url:{
       thumbnail:Boolean,
       color_summary:[
          String,
       ]
    },
    xl_picture_url: {
        type: String,
        required: true,
    }
    street:String,
    neighbourhood:String,
    neighbourhood_cleansed:String,
    neighbourhood_group_cleansed:String,
    city:String,
    price: Number,
    review_scores_rating:Number
 })
export default mongoose.model('Airbnb', airbnbSchema);