
// ##############################################################################
// #######demo05: Delete THE PRODUCT from the server using its pid
// ##############################################################################

import express from 'express'
const app=express();
const PORT=3000;

const productList=[
    {"pid":1001,"pname":"Pepsi 500ml","unitPrice":30.00},
    {"pid":1002,"pname":"Limca 500ml","unitPrice":30.00},
    {"pid":1003,"pname":"Mazza 500ml","unitPrice":30.00},
]

app.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("Server working "
    +"<a href='productlist'>Products</a> "
    +"<a href='product/1001'>Pid: 1001</a>")
})
app.get('/productlist',(req,resp)=>{
    resp.setHeader("Content-Type","application/json");
    resp.send(productList);    
})
app.get('/product/:pid',(req,resp)=>{
    const pid=req.params.pid;
    resp.setHeader("Content-Type","application/json");
    const product=productList.find(p=>p.pid==pid);  
    if(product!=null && product !=undefined){
        resp.send(product);
    }else{
        resp.send("Product not found");
    }
})

app.delete('/product/:pid',(req,resp)=>{
    const pid=req.params.pid;
    resp.setHeader("Content-Type","application/json");
    const index=productList.findIndex(p=>p.pid==pid);
    if(index!=null && index!=undefined){
        delete productList[index]
        let dproductList=productList.filter(p=>p!=null)
        resp.send(pid+" Product details deleted\n"+JSON.stringify(dproductList));
    }else{
        resp.send("No product found Enter valid pid");
    }

})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT} STARTED`);
})