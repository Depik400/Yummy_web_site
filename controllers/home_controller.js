const passport = require("passport");
const video = require("../models/video");

exports.index = function (req, res) {
  var username;
  var check = true;
  if (req.user != undefined) {
    check = false;
    username = req.user.username;
  }
  var obj = {};
  if(req.query.title_name != undefined && req.query.title_name != ''){
      console.log(req.query.title_name + obj)
    obj = {
        title:new RegExp(req.query.title_name +'*','i')
    }
  }
  

  video
    .find(obj)
    .lean()
    .exec((err, video) => {
      //console.log(video);

      res.render("index", {
        cases: "main_screen",
        NotLogin: check,
        username: username,
        search: true,
        titles: video,
      });
    });
};
