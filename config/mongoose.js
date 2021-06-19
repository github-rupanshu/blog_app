const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.2du74.mongodb.net/blog_app?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,});
// mongoose.connect('mongodb://localhost/todo_app');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connectiong to mongodb atlas database'));

db.once('open',()=>{
    console.log('connected to Database :: MongoDB')
});

module.exports = db;
