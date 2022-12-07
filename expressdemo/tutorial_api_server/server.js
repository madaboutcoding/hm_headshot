import express from 'express'
import route from './app/route/tutorial.js'
import db from './app/model/index.js';

db.mongoose.connect(db.url,{useNewUrlParser: true, useUnifiedTopology: true})
           .then(()=>{
            console.log("Db Connected ");
           }) 
           .catch(err=>{
            console.log("Error Connecting DB "+err);
           }) 



const server=express();
const PORT=3000;

server.use(express.json());
server.use(express.urlencoded({extended:true}))


server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("Welcome to express+mongoose backend logic")
})
server.use("/api",route);
server.listen(PORT,()=>{
    console.log(`SERVER LINK: http://localhost:${PORT}`);
})