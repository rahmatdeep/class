const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:root@cluster0.m63nmlj.mongodb.net/todo-app")

const todoScheme = mongoose.Schema({
    title: String,
    description: String,
    complete: Boolean
})

const todo = mongoose.model('todos', todoScheme)

module.exports = {todo}


