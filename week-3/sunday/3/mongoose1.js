const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:root@cluster0.m63nmlj.mongodb.net/userappnew")

const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String
});

const user = new User({name:'Harkirat', email:'dkjdskj@djsjsd.com', password:'123131'})
user.save();