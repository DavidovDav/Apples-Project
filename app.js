// Imports
const express = require('express');
const mongoose = require("mongoose");
const app = express();

const url = `mongodb://mongodb:27017/${process.env.MONGODB_DATABASE}`;

// Connect to Mongo DB with mongoose.
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to Mongo DB successfully"))
.catch(error => console.log("Error to connect Mongo DB: ", error));

// Define a mongoose schema
const fruitSchema = new mongoose.Schema({
  _id: {type: Number, required:true},
  name: {type: String},
  qty: {type: Number, required:true},
  rating: {type: Number}
});

// Compile model from schema
const fruits = mongoose.model("fruits", fruitSchema);

// View ejs files(index.ejs etc).
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
fruits.findOne({ name: 'apples' }).then(result => {
    console.log('Query result:', result);
    if (result) {
    	const qty = result.qty;
    	res.render('index', { message: `There are ${qty} apples.` });
    } else {
      	res.render('index', { message: `No apples found.` });
    }
}).catch(error => {
    console.log('Error querying the database:', error);
    res.status(500).json('Internal Server Error');
    });
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
