const mongoose = require('mongoose');
const user = mongoose.model('User',{
    username:String,
    password: String,
    role: String
});
module.exports = user;