const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shubham:$reactinotebook$@cluster0.rdtpc.mongodb.net/inotebook?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;