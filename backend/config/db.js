import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://HemanthTG:31Aug2005@cluster0.j4vu0oq.mongodb.net/tomato').then(()=>console.log("Database is connected."))
}


// mongodb+srv://HemanthTG:31Aug2005@cluster0.j4vu0oq.mongodb.net/tomato