const mongoose  = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://sumitmaurya005dev:admin@cluster0.iemkelv.mongodb.net/hally")   
    console.log("Connected to DB"); 
}
module.exports = connectDB