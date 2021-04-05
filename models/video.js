const mongoose = require('mongoose');
const Video = mongoose.model('Video',{
    title: String,
    review: Number,
    count_of_review:Number,
    views: Number,
    status: String,
    rating: String,
    studio: String,
    type: String,
    series: Number,
    image_path:String
});
module.exports = Video;