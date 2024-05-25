import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to the mongoDB")
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(express.json());
const port = 3000;
app.use('/api/user', userRoutes);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
