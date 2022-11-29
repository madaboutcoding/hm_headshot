import express from "express";
const category_route=express.Router();

category_route.get("/category",(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("/myshopee/category called")
})


export default category_route;