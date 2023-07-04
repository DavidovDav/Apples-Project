// Imports
const express = require('express');
const mongoose = require("mongoose");
const app = express();

const url = ('mongodb://mongodb:27017/apples');

// Connect to Mongo DB with mongoose.
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to Mongo DB successfully"))
.catch(error => console.log("Error to connect Mongo DB: ", error));

// Define a mongoose schema
const fruitSchema = new mongoose.Schema({
  _id: {type: Number, required:true},
  name: {type: String, required:true},
  qty: {type: Number, required:true},
  rating: {type: Number, required:true},
  microsieverts: {type: Number, required:false}
});


// Compile model from schema
const fruits = mongoose.model("fruits", fruitSchema, "fruitsdb");

// View ejs files(index.ejs etc).
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //res.render("index");
  fruits.find({ name: 'apples' }).then(result => {
    const qty = result.qty;
    res.status(200).json(qty);
  });
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
