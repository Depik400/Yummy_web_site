const multer = require("multer");
const path = require("path");
const video = require('../models/video');
const sharp = require('sharp');

var Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/title_img");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.title + path.extname(file.originalname));
  },
});

const FileFilter = (req,file,cb) =>{
  video.findOne({'title':req.body.title},(err,videos) =>{
    if(videos){
      console.log('exists');
      cb(null,false);
    }else{
      cb(null,true);
    }
  });
}

exports.uploadFile = multer({ storage: Storage,fileFilter:FileFilter }).single("upload");

