const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const userRoutes = require('./Routes/routes');


//cONFIGURING EXPRESS AND DOTENV FOR USE
const app = express();
dotenv.config();

app.use(bodyParser.json());

// Connect to MongoDB
const { MONGO_URI }   = process.env;
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
 

      //using the routes

      app.use('/api/users', userRoutes);
      app.use('/api/users/:id', userRoutes);


// Creating the server and port
const PORT = process.env.PORT || 6788

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})
