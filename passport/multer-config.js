const multer = require('multer');
const path = require('path');

var Storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./public/title_img');
    } ,
    filename: (req,file,cb) =>{
        cb(null,req.body.title +path.extname(file.originalname));
    }
});

module.exports = multer({storage: Storage}).single('upload');