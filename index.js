import { passportFunction } from "./config/passport.js";
import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();

const passport = passportFunction();
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(cors());
app.use("/", router);

app.listen(3001, () => console.log('Listening on port 3001 :)'))
