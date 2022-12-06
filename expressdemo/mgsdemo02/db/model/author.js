// Require Mongoose
const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    "first_name":String,
    "last_name":String
})
const Author_Model=mongoose.model("Author",AuthorSchema);

module.exports=Author_Model;

