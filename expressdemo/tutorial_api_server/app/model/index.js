import dbConfig_url from '../config/db.config.js'
import tutorials from './tutorial.model.js'
import mongoose from 'mongoose';
mongoose.Promise=global.Promise
const db={};
db.mongoose=mongoose;
db.url=dbConfig_url;
db.tutorials=tutorials;

export default db;
