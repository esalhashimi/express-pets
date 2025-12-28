//.dotenv
const dotenv = require('dotenv');
dotenv.config();
//.express
const express = require('express');
const app = express();
//.mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


//.MiddleWare
const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.json());




app.listen(3000, () => {
  console.log('The express app is ready!');
});
