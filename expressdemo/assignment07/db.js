import mongoose, {Schema} from "mongoose";

const mongodb="mongodb://127.0.0.1/onodb";
mongoose.connect(mongodb,{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("DB Connected");})
.catch(err=>{console.log("DB Not Connected");})

// userschema
const user_schema=new Schema({
    "name":String,
	"email":String,
	"phoneNo":String
});
// ordersshema
const order_schema=new Schema({
    "orderid":String,
	"orderdate":String,
	"user":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const User_Model=mongoose.model("User",user_schema)
const Order_Model=mongoose.model("Order",order_schema)
// createUser
const creteUser=function(name,email,phoneNo){
    const user=new User_Model({name,email,phoneNo});
    return user.save();
}
// createOrder
const createOrders=function(orderid,orderdate,user){
    const order=new Order_Model({orderid,orderdate,user});
    return order.save();
}
//Create user 
// creteUser("John Doe","john.doe@mistic.com","9876543210")
//         .then(user=>{
//             console.log("User Registered");
//             const user_id=user._id.toString();
//             return createOrders("O1001","06-07-2022",user_id);
//         })
//         .then(order=>{
//             console.log("Order Created")
//         })
//         .catch(error=>console.log(err));
const showAllOrders=async function(){
    const orders=await Order_Model.find().populate("user");
    console.log(orders);
}
showAllOrders();