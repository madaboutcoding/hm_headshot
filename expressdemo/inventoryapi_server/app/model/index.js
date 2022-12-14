import mongoose from 'mongoose';
import dbConfigUrl from '../config/db.config.js';
import Product from './product.model.js'

mongoose.Promise=global.Promise
const db={};
db.mongoose=mongoose
db.url=dbConfigUrl
db.Product=Product

export default db;