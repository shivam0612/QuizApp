require("dotenv").config();
const mongoose = require("mongoose");

//creating a DB
mongoose.connect("mongodb+srv://KillerX:root@cluster0.g6yky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
})