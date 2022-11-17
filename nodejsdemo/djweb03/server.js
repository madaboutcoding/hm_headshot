// step1 : Import require express and fs modules 
import http from 'http';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import bodyParser from 'body-parser';
// http.use(bodyParser.json()); // support json encoded bodies
// http.use(bodyParser.urlencoded({ extended: true })); // support e
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
//By Default it will give response to GET Method
function onRequest(req, resp) {

    const url = req.url;
    const method = req.method;
    if (method == "GET") {
        switch (url) {
            case "/":
            case "/login.html":
                resp.setHeader("Content-Type", "text/html");
                fs.readFile(__dirname + "/login.html", (err, data) => {

                    if (err) {
                        resp.write("Err: " + err);
                    }
                    else {
                        resp.write(data)
                    }
                    resp.end();
                })
                break;
            case '/css/style.css':
                fs.readFile(__dirname + '/css/style.css', (err, data) => {
                    resp.setHeader("Content-Type", "text/css");
                    if (err) {
                        resp.write("Err: " + err);
                    }
                    else {
                        resp.write(data)
                    }
                    resp.end();
                })
                break;
            case '/js/login.js':
                fs.readFile(__dirname + '/js/login.js', (err, data) => {
                    resp.setHeader("Content-Type", "application/json");
                    if (err) {
                        resp.write("Err: " + err);
                    }
                    else {
                        resp.write(data)
                    }
                    resp.end();
                })
                break;
            case '/js/home.js':
                fs.readFile(__dirname + '/js/home.js', (err, data) => {
                    resp.setHeader("Content-Type", "application/json");
                    if (err) {
                        resp.write("Err: " + err);
                    }
                    else {
                        resp.write(data)
                    }
                    resp.end();
                })
                break;

        }

    } else if (method == "POST") {
        // console.log(req);

        switch (url) {
            case '/login':
            case '/welcome.html':
                // const userName=req.body.userName;
                // const password=req.body.password;
                // if(userName==="admin"&&password==="P@ssword123"){
                    fs.readFile(__dirname + '/welcome.html', (err, data) => {
                        resp.setHeader("Content-Type", "text/html");
                        if (err) {
                            resp.write("Err: " + err);
                        }
                        else {
                            resp.write(data)
                        }
                        resp.end();
                    })
                // }else{
                //     fs.readFile(__dirname + '/login.html', (err, data) => {
                //         resp.setHeader("Content-Type", "text/html");
                //         if (err) {
                //             resp.write("Err: " + err);
                //         }
                //         else {
                //             resp.write(data)
                //         }
                //         resp.end();
                //     })
                // }
                
                break;

        }
    }

}
http.createServer(onRequest).listen(PORT, () => {
    console.log(`http://localhost:${PORT} Started`);
})