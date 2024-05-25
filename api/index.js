import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to the mongoDB")
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(express.json());
const port = 3000;
app.get("/",(req,res)=>{
   res.send("Hello world")
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
