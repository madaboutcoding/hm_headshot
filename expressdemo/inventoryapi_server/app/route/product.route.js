//Step 1 : import express and route 
import express from 'express'
import ProductController from '../controller/product.controller.js'
const productRoute=express.Router();


//Step 2 : Write the REST API for each HttpMethods
productRoute.get('/products',ProductController.findAll)
productRoute.get('/products/bypname/:pname',ProductController.findOneByPname)
productRoute.get('/products/bypid/:pid',ProductController.findOneByPid)

export default productRoute;