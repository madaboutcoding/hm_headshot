import db from '../model/index.js'
const Tutorial = db.tutorials;
const TutorialController = {}
// findAll
TutorialController.findAll = (req, resp) => {
    Tutorial.find({}, (err, docs) => {
        resp.setHeader("Content-Type", "application/json");
        if (err) {
            resp.send({ "Error": err })
        }
        resp.send(docs)
    });

}
// findOne
TutorialController.findOne = (req, resp) => {
    const title = req.params.title;
    Tutorial.findOne({ "title": title }, (err, docs) => {
        resp.setHeader("Content-Type", "application/json");
        if (err) {
            resp.send({ "Error": err })
        }
        resp.send(docs)
    });

}
// findAllPublished 
TutorialController.findAllPublished = (req, resp) => {
    const published = req.params.published;
    Tutorial.find({ "published": published }, (err, docs) => {
        resp.setHeader("Content-Type", "application/json");
        if (err) {
            resp.send({ "Error": err })
        }
        resp.send(docs)
    });
}
// create
TutorialController.create = (req, resp) => {

    const newTutorial = new Tutorial({
        "title": req.body.title,
        "description": req.body.title,
        "published": req.body.published
    })
    console.log("newTutorial =" + newTutorial);
    newTutorial.save((err,docs) => {
        resp.setHeader("Content-Type", "application/json");
        if (err) {
            resp.send({ "Error": err })
        }
        resp.send(docs)
    })
        

}
// update
TutorialController.update = (req, resp) => { }
// delete
TutorialController.deleteOne = (req, resp) => { }
// deleteAll
TutorialController.deleteAll = (req, resp) => { }

export default TutorialController;