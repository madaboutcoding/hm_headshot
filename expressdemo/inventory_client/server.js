import express from 'express'
import cookieSession from 'cookie-session';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT= 4000;
const server=express();
server.use(cookieSession({
    name:"mycookie",
    keys:["12345"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


server.get('/',(req,resp)=>{
    fs.readFile(__dirname+'/public/index.html',(err,data)=>{
        // Update views
        req.session.views = (req.session.views || 0) + 1
        resp.setHeader("Content-Type","text/html")
        if(err){
            resp.send("Error ")
        }
        
        resp.send(data);
    })
})
server.get('/app.js',(req,resp)=>{
    fs.readFile(__dirname+'/public/js/app.js',(err,data)=>{
        resp.setHeader("Content-Type","application/json")
        if(err){
            resp.send("Error ")
        }        
        resp.send(data);
    })
})
server.get('/style.css',(req,resp)=>{
    fs.readFile(__dirname+'/public/css/style.css',(err,data)=>{
        resp.setHeader("Content-Type","text/css")
        if(err){
            resp.send("Error ")
        }        
        resp.send(data);
    })
})
server.listen(PORT,()=>console.log(`http://localhost:${PORT} STARTED`));