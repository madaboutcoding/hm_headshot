// http=>creating your own server
// fs=> to share the resources / assets 
const http=require('http');
const fs=require('fs');
const port=3000;

http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/text");
    resp.write("<strong>Welcome to the world of node</strong>");
    resp.write("<strong>Welcome to the world of node</strong>");
    resp.end();
}).listen(port,()=>{
    console.log(`Hi Im alive at http://localhost:${port}`);
})