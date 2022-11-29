import express from "express";
const product_route=express.Router();
product_route.get("/product",(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("/myshopee/product called")
})

export default product_route;

