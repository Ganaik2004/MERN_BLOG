import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
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
app.use('/api/auth', authRoutes);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode||500;
    const message = err.message||"Internal Server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})
