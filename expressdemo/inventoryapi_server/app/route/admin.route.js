import express from 'express';
const adminRoute=express.Router();

adminRoute.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("called /admin home page called")
})
export default adminRoute;