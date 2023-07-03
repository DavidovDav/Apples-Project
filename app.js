const express = require('express');
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/applesdb",{
  useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
  if(err)
  {
    console.log(err)
  }else{
    console.log("successfully connected")
  }
})

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index");
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
