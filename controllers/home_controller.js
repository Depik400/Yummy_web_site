const passport = require('passport');

exports.index = function(req,res) {
    var username;
    var check = true;
    if(req.user != undefined){
        check = false;
        username = req.user.username;
    }
    res.render('index',{
        cases: 'main_screen',
        NotLogin: check,
        username: username
    });
}