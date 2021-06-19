const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
   
},{
    timestamps:true
});

const blog = mongoose.model('BlogList',blogSchema);

module.exports = blog;