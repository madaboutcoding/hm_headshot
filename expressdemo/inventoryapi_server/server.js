// Step 1: import express
// const express=(function(){})
import express from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import productRoute from './app/route/product.route.js'
import adminRoute from './app/route/admin.route.js'
// inject the db connection
import db from './app/model/index.js';
db.mongoose.connect(db.url,{useNewUrlParser: true, useUnifiedTopology: true})
           .then(()=>console.log("Db Connected "))
           .catch(()=>console.log("Db Not Connected ")) 
// Step 2: home page
const server=express();
const corsOptions = {origin:"http://localhost:4000"}
server.use(cors(corsOptions))
server.use(express.json())
server.use(express.urlencoded({extended:false}))
server.use(cookieSession({
    name:"session",
    keys:["12345"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
server.use("/api",productRoute);
server.use("/admin",adminRoute);

server.get("/",(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("Welcome to the API")
})
// Step 3: start the server at 3000
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})