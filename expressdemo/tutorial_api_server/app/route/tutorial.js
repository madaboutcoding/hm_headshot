import express from 'express'
import TutorialController from '../controller/tutorial.controller.js';
const route=express.Router();


// GET	api/tutorials	get all Tutorials
route.get('/tutorials',TutorialController.findAll)

// GET	api/tutorials/:title	get Tutorial by id
route.get('/tutorials/:title',TutorialController.findOne)

// GET	api/tutorials/published/:published	find all Tutorials which title contains 'kw'
route.get('/tutorials/published/:published',TutorialController.findAllPublished)

// POST	api/tutorials	add new Tutorial
route.post('/tutorials',TutorialController.create)

// PUT	api/tutorials/:id	update Tutorial by id
route.put('/tutorials/:id',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("PUT	api/tutorials/:id	update Tutorial by id")
})

// DELETE	api/tutorials/:id	remove Tutorial by id
route.delete('/tutorials/:id',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("DELETE	api/tutorials/:id	remove Tutorial by id")
})

// DELETE	api/tutorials	remove all Tutorials
route.delete('/tutorials',(req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.send("DELETE	api/tutorials	remove all Tutorials")
})

export default route;