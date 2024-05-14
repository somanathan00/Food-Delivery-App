import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://somuvijay78:Pandian27051954%40@cluster0.jzx6rml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB connected"))
}

