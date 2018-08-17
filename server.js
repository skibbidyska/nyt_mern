const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//import routes
const articles = require("./routes/api/articles");

const app = express();
//bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//production static path
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//mongoDb

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//routes

app.use("/api/articles", articles);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));
