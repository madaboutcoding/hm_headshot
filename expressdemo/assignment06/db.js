import mongoose from "mongoose";

//  mongoose.createConnection("mongodb://127.0.0.1:27017/testdb")
const mongoDB="mongodb://127.0.0.1:27017/testdb";
mongoose.connect(mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true })
const db=mongoose.connection;


// console.log("db= "+db);

const { Schema } = mongoose;
// const Schema=mongoose.Schema;
const User_Schema=new Schema({
    "name":String,
	"email":String,
	"phoneNo":String
})

const User_Model=mongoose.model("User",User_Schema);
// User_Model.findOne({"name":"John Doe"}, (err, docs) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("Data: " + docs);
//     }
// });
console.log("################################");
// User_Model.find({}, (err, docs) => {
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("Data: " + docs);
//     }
// });
// User_Model.updateOne({"name":"John Doe"},{$set:{"email":"john.doe@mistic.com"}},(err,data)=>{
//     if (err) {
//         console.log("Error: ", err);
//     } else {
//         console.log("Data: " + data);
//     }
// })
User_Model.findOneAndDelete({"name":"Dennis  Mennis"},(err,doc)=>{
    if(err){
        console.log("Error: Doc not deleted");
    }else{
        console.log("Successfully deleted");
    }
})
db.on("error", console.error.bind(console, "#### MongoDB connection error:"))