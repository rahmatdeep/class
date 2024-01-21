const mongoose = require("mongoose")

const dbURL = "mongodb+srv://admin:root@cluster0.m63nmlj.mongodb.net/paytm"

mongoose.connect(dbURL);

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.model("User", UserSchema)

module.exports = {
    User
}