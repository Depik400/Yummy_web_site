const passport = require('passport');
const video = require('../models/video');

exports.index = function(req,res) {
    var username;
    var check = true;
    if(req.user != undefined){
        check = false;
        username = req.user.username;
    }

    video.find({}).lean().exec((err,video) => {
        console.log(video);
   

    res.render('index',{
        cases: 'main_screen',
        NotLogin: check,
        username: username,
        titles:video
    });
});
}