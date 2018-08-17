const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  published_date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = Article = mongoose.model("articles", ArticleSchema);
