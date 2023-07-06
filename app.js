// Imports the necessary modules.
const express = require('express'); // Creating the web server.
const mongoose = require("mongoose"); // Interacting with MongoDB.s
const app = express();

// Define the URL for connecting to the mongoDB.
const url = `mongodb://mongodb:27017/${process.env.MONGODB_DATABASE}`;

// Connect to Mongo DB with mongoose.
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to Mongo DB successfully"))
.catch(error => console.log("Error to connect Mongo DB: ", error));

// Define a mongoose schema for the fruits collection.
const fruitSchema = new mongoose.Schema({
  _id: {type: Number, required:true},
  name: {type: String},
  qty: {type: Number, required:true},
  rating: {type: Number}
});

// Compile schema into model.
const fruits = mongoose.model("fruits", fruitSchema);

// Set the view engine for rendering dynamic html templates (index.ejs).
app.set('view engine', 'ejs');

// Defines a route for the root URL.
app.get('/', (req, res) => {
fruits.findOne({ name: 'apples' }).then(result => {
    console.log('Query result:', result);
    if (result) { // If a result is found, it renders the index.ejs template with a message indicating the quantity of apples.
    	const qty = result.qty;
    	res.render('index', { message: `There are ${qty} apples.` });
    } else { //If no result is found, it renders the index.ejs template with a message indicating that no apples were found.
      	res.render('index', { message: `No apples found.` });
    }
}).catch(error => { // If an error occurs during the database query, it logs the error and sends a 500 Internal Server Error response.
    console.log('Error querying the database:', error);
    res.status(500).json('Internal Server Error');
    });
});

// Sets the port for the Express server.
// Listen to the App Engine-specified port, or 3000 otherwise
const PORT = process.env.NODE_LOCAL_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
