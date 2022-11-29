import express from "express";
const orders_route=express.Router();

orders_route.get("/orders",(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("/myshopee/orders called")
})


export default orders_route;