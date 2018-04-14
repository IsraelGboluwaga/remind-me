let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Todo = new Schema({
    name: {type: String, required: true},
    remindMe: {type: Boolean, required: true},
    time: {type: Date, required: false},
    created_at: {type: Date, default: Date.now()}
});

let todoModel = mongoose.model('Todo', Todo);
module.exports = todoModel;