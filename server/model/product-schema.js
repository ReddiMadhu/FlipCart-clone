import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    description:String,
    url:String,
    detail:String,
    title:Object,
    price:Object,
    quantity:Number,
    discount:String,
    tagline:String,
});

const Product=mongoose.model('product',productSchema);

export default Product;