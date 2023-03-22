import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/realestate', { useNewUrlParser: true }).then(
    () => {
        console.log("Database successfully connected");
    }
)

export default mongoose;