// dotenv
const dotenv = require('dotenv');
dotenv.config();
// express
const express = require('express');
const app = express();

//Controller
const petCtrl = require("./controllers/pets");

// mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});



const morgan = require('morgan');

// MiddleWare
app.use(morgan('dev'));

app.use(express.json());

//Router
app.use("/pets" , petCtrl)




app.listen(3000, () => {
  console.log('The express app is ready!');
});
