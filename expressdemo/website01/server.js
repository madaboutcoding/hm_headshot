import express, { urlencoded }  from "express";
import product_route from "./product_route.js"
import category_route from "./category_route.js"
import orders_route from "./orders_route.js"
const server=express();
const port=4000;
server.use(express.json())
server.use(urlencoded({extended:true}));


server.use("/myshopee",product_route)
server.use("/myshopee",category_route)
server.use("/myshopee",orders_route)

server.get("/myshopee",(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("Express working /myshopee"
    +    "<br/><a href='/myshopee/product'>Product</a>"
    +    "<br/><a href='/myshopee/category'>Category</a>"
    +    "<br/><a href='/myshopee/orders'>Orders</a>"
    )
})
server.listen(port,()=>{
    console.log(`shttp://localhost:${port}/myshopee`);
})
