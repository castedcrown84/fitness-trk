const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
//set port
const PORT = process.env.PORT || 3000;

const app = express();

//use logger
app.use(logger("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use static files
app.use(express.static("public"));

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittrack", {useNewUrlParser: true});
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

//require('./seeders/seed')

//use routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"))


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})