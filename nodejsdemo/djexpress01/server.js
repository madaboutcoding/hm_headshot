import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT=3001;
const app=express();
// ################################################
app.post('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("Post Method Called ");
})
app.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("Get Method Called ");
})
app.put('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("Put Method Called ");
})

app.delete('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("Delete Method Called ");
})

// ################################################
// app.get('/',(req,resp)=>{

//     fs.readFile(__dirname+"/public/index.html",(err,data)=>{
//         resp.setHeader("Content-Type","text/html");
//         if(err){
//             resp.send("Error: "+err)
//         }else{
//             resp.send(data)
//         }
//     });
// })
// app.get('/css/style.css',(req,resp)=>{
//     resp.setHeader("Content-Type","text/css")
//     fs.readFile(__dirname+'/public/css/style.css',(err,data)=>{
//         if(err){
//             resp.send("Error: "+err)
//         }else{
//             resp.send(data)
//         }
//     })
// })
// app.get('/js/app.js',(req,resp)=>{
//     resp.setHeader("Content-Type","applicaiton/json")
//     fs.readFile(__dirname+'/public/js/app.js',(err,data)=>{
//         if(err){
//             resp.send("Error: "+err)
//         }else{
//             resp.send(data)
//         }
//     })
// })

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT} STARTED`);
});