import mongoose from "mongoose";


export const Connection = async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.a3tlleh.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Db connected");
    }catch(error){
        console.log('Error while connecting with database',error.message);
    }
}

export default Connection;