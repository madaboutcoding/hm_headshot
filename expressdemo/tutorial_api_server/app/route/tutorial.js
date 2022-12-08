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

// PUT	api/tutorials/:title	update Tutorial by id
route.put('/tutorials/:title',TutorialController.update)

// DELETE	api/tutorials/:title	remove Tutorial by id
route.delete('/tutorials/:title',TutorialController.deleteOne)

// DELETE	api/tutorials	remove all Tutorials
route.delete('/tutorials',TutorialController.deleteAll)

export default route;