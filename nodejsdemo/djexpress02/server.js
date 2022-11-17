import express from 'express';
const app=express();
const PORT=3000;

const productList=[
    {"pid":1001,"pname":"Pepsi 500ml","unitPrice":30.00},
    {"pid":1002,"pname":"Limca 500ml","unitPrice":30.00},
    {"pid":1003,"pname":"Mazza 500ml","unitPrice":30.00},
]
//Getting json object from server
app.get('/productlist',(req,resp)=>{
    resp.setHeader("Content-Type","application/json");
    resp.send(productList);    
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT} Started`);
})