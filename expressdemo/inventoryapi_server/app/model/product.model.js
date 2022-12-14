import { Int32 } from 'bson';
import mongoose,{Schema} from 'mongoose';
const ProductSchema=new Schema({
    "pid":String,
    "pname":String,
    "unitPrice":Number
});
const Product=mongoose.model("Product",ProductSchema);

export default Product;