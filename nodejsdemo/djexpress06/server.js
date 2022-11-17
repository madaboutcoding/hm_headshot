import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT=3000;
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const productList=[
    {"pid":1001,"pname":"Pepsi 500ml","unitPrice":30.00},
    {"pid":1002,"pname":"Limca 500ml","unitPrice":30.00},
    {"pid":1003,"pname":"Mazza 500ml","unitPrice":30.00},
]

app.post('/product/add',(req,resp)=>{
    
    console.log(req.body.pid+"  "+req.body.pname+"  "+req.body.unitPrice);
    const newProduct={
        "pid":req.body.pid,
        "pname":req.body.pname,
        "unitPrice":req.body.unitPrice};
    
    resp.setHeader("Content-Type","application/json");

    if(newProduct!=null && newProduct!=undefined){
        productList.push(newProduct);        
        resp.send(JSON.stringify(newProduct));
    }else{        
        resp.send({"Error":"New Product not added in the list. Failed due to fatal error"});
    }
    

})
app.get('/product/all',(req,resp)=>{
    resp.setHeader("Content-Type","application/json")
    resp.send(productList);
})
// ################################################
app.get('/',(req,resp)=>{
    fs.readFile(__dirname+"/public/index.html",(err,data)=>{
        resp.setHeader("Content-Type","text/html");
        if(err){
            resp.send("Error: "+err)
        }else{
            resp.send(data)
        }
    });
})
app.get('/css/style.css',(req,resp)=>{
    resp.setHeader("Content-Type","text/css")
    fs.readFile(__dirname+'/public/css/style.css',(err,data)=>{
        if(err){
            resp.send("Error: "+err)
        }else{
            resp.send(data)
        }
    })
})
app.get('/js/app.js',(req,resp)=>{
    resp.setHeader("Content-Type","applicaiton/json")
    fs.readFile(__dirname+'/public/js/app.js',(err,data)=>{
        if(err){
            resp.send("Error: "+err)
        }else{
            resp.send(data)
        }
    })
})


// #######################################
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT} STARTED`);
})