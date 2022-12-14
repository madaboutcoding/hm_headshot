import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT=3000;
const app=express();

const productList=[
    {"pid":1001,"pname":"Pepsi 500ml","unitPrice":30.00},
    {"pid":1002,"pname":"Limca 500ml","unitPrice":30.00},
    {"pid":1003,"pname":"Mazza 500ml","unitPrice":30.00},
]
// ########### REST API  ########### 
	app.use(express.json());
	app.use(express.urlencoded({extended:true}));

app.post("/product/add",(req,resp)=>{
    resp.setHeader("Content-Type","application/json")
    const pid=req.body.pid;
    const pname=req.body.pname;
    const unitPrice=req.body.unitPrice;
    let newProduct=null;
    if(pid!=null && pname!=null && unitPrice!=null){
     newProduct={"pid":pid,"pname":pname,"unitPrice":unitPrice};
     resp.send({"messgage":"New Product added","product":JSON.stringify(newProduct)})
    }else{
        resp.send({"error":"Product not added"})
    }
})
app.get("/product/all",(req,resp)=>{
    resp.setHeader("Content-Type","application/json")
    resp.send(productList)
})
app.get("/product/:pid",(req,resp)=>{
    resp.setHeader("Content-Type","application/json")
    const pid=req.params.pid;
    const product=productList.find(p=>p.pid===pid);
    if(product!=undefined && product!=null){
        resp.send(JSON.stringify(product));
    }else{
        resp.send({"Error":"No product found for pid: "+pid})
    }
    
})
app.put("/product/update/:pid",(req,resp)=>{
    resp.setHeader("Content-Type","application/json")
})
app.delete("/product/delete/:pid",(req,resp)=>{
    resp.setHeader("Content-Type","application/json")
})
//  ########### UI  ########### 
app.get("/",(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    fs.readFile(__dirname+"/public/index.html",(err,data)=>{
        if(err){
            resp.send("Error: file not found");
        }else{
            resp.send(data);
        }
    })
})
app.get("/style.css",(req,resp)=>{
    resp.setHeader("Content-Type","text/css")
    fs.readFile(__dirname+"/public/css/style.css",(err,data)=>{
        if(err){
            resp.send("Error: file not found");
        }else{
            resp.send(data);
        }
    })
})
app.get("/app.js",(req,resp)=>{
    resp.setHeader("Content-Type","application/json")
    fs.readFile(__dirname+"/public/js/addproduct.js",(err,data)=>{
        if(err){
            resp.send("Error: file not found");
        }else{
            resp.send(data);
        }
    })
})
//##########################################################################################################################################################
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT} STARTED `);
})