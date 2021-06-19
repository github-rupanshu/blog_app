const express = require('express');
const db = require('./config/mongoose');
const jwt = require('./config/passportJWT');
const passport= require('passport');

const app = express();
const port = 8000;

// used to extarct jason data from req
app.use(express.json());
app.use(express.urlencoded());



//use express router
app.use('/', require('./routes'));

//start server
app.listen(port,(err)=>{
    if(err) {console.log(`error in running server${err}`);}

    console.log(`Server is running at port: ${port}`);
})