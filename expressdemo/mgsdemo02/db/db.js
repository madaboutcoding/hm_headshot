const mongoose = require('mongoose');
const Author_Model = require("./model/author")
const { Schema } = mongoose;

const mongoDB = "mongodb://localhost:27017/locallibrarydb";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "#### MongoDB connection error:"));


function saveAuthor() {
    // ######## Save Author objects 
    const author1 = new Author_Model({ "first_name": "Amit", "last_name": "Trivedi" })
    const author2 = new Author_Model({ "first_name": "Sudha", "last_name": "Murthi" })
    const author3 = new Author_Model({ "first_name": "Chetan", "last_name": "Bhagat" })

    author3.save((err) => {
        if (err) {
            console.log("Err " + err);
            return;
        }
        console.log("Saved Successfully");
    });
}

// ### fetch records from mongodb for author
function findOneAuthor() {

    Author_Model.findOne({ "first_name": "Amit" })
        .exec((err, author) => {
            if (err) {
                console.log("Error :" + err);
                return;
            }
            console.log(author);
        });
}
// console.log("Author_Model.find().exec((err,data)=>{}");
// // Author_Model.find().exec((err,data)=>{
// //     if(err){
// //         console.log("Error: ",err);
// //     }else{
// //         console.log("Data: "+data.first_name);
// //     }
// // })
// find({restriction},{projection})
function findAllAuthor() {
    console.log("Author_Model.find({},(err,docs)=>{}");
    Author_Model.find({}, (err, docs) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            console.log("Data: " + docs);
        }
    });

}
function findOneAndUpdate(){
    Author_Model.findOneAndUpdate({"first_name":"Amrish"},
                              {$set:{"last_name":"Tripathi"}},
                              (err,docs)=>{
                                if(err){
                                    console.log("Error: Doc not updated");
                                }else{
                                    console.log("Successfully updated");
                                }
                              });
}
Author_Model.findOneAndDelete({"first_name":"Chetan"},(err,doc)=>{
    if(err){
        console.log("Error: Doc not deleted");
    }else{
        console.log("Successfully deleted");
    }
})
module.exports = db;