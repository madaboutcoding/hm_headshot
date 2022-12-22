import db from '../model/index.js'
const Product = db.Product;
const ProductController = {};
ProductController.findAll = (req, resp) => {
    Product.find({}, (err, doc) => {
        resp.setHeader("Content-Type", "application/json")
         // Update views
        req.session.views = (req.session.views || 0) + 1
        if (err) {

            resp.status(404).send("Error ")
        } else {
            console.log(doc);
            resp.status(200).send(doc)
        }
    })

}
ProductController.findOneByPname = (req, resp) => {
    const pname = req.params.pname;
    Product.findOne({ "pname": pname }, (err, doc) => {
        resp.setHeader("Content-Type", "application/json")
        if (err) {

            resp.status(404).send("Error ")
        } else {

            resp.status(200).send(doc)
        }
    })

}
ProductController.findOneByPid = (req, resp) => {
    const pid = req.params.pid;
    Product.findOne({ "pid": pid }, (err, doc) => {
        resp.setHeader("Content-Type", "application/json")
        if (err) {
            resp.status(404).send("Error ")
        } else {
            resp.status(200).send(doc)
        }
    })

}


export default ProductController;