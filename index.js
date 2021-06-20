const express = require('express');
const db = require('./config/mongoose');
const jwt = require('./config/passportJWT');
const passport= require('passport');

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = process.env.PORT || 8000;
// used to extarct jason data from req
app.use(express.json());
app.use(express.urlencoded());

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Blog API",
        description: "Blog API Information",
        
        // servers: ["http://localhost:8000"]
      }
    },
    // ['.routes/*.js']
    apis: ['./routes*.js',"./routes/index.js","routes/api/v1/*.js"]//routes
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//use express router
app.use('/', require('./routes'));

//start server
app.listen(port,(err)=>{
    if(err) {console.log(`error in running server${err}`);}

    console.log(`Server is running at port: ${port}`);
})