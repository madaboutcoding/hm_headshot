import mongoose,{ Schema } from "mongoose";

const  tutorial_schema=new Schema({ 
    title: String,
    description: String,
    published: Boolean}, { timestamps: true })

const tutorials=mongoose.model("Tutorial",tutorial_schema);

export default tutorials;