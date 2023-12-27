import mongoose from "mongoose";


const connectDatabase= ()=>{

const link = "mongodb+srv://hackaifinals:hihihihi@cluster0.mklwd8h.mongodb.net/HackAI";
mongoose.connect(link,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
    console.log(`MongoDB connected with server: ${data.connection.host}`);    
}).catch((err)=> {
    console.log(err);
})

}

export default connectDatabase;