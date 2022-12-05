// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String
});
const Blog = mongoose.model('Blog', blogSchema);
const blog1=new Blog({
    title:  "Monk who sold his Ferrari", 
    author: "Robin Sharma"
  })
main()
.then(v=>{
    console.log("Connected to 'mongodb://localhost:27017/test'");
    blog1.save();
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}