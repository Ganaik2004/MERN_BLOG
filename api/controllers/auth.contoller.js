import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'
export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
   return next(errorHandler(400,"Please Enter All The Feilds"));
  }
  const hashedPassword = bcryptjs.hashSync(password,10);
  const newUser = new User({
               username,
               email,
               password:hashedPassword,
  });
  try{
      await newUser.save();
      res.status(214).json("User Created Successfully")
  }catch(err){
   return next(err);
  }
};
export const signin = async(req,res,next)=>{
  const {email,password } = req.body;
  if(!email || !password || email===''||password===''){
    return next(errorHandler(400,"Please Enter All The Feilds"));
  }
  try{
   const validuser = await User.findOne({email});
   if(!validuser){
    return next(errorHandler(404,"User Not Found"));
    }
    const validPassword = bcryptjs.compareSync(password,validuser.password);
    if(!validPassword){
      return next(errorHandler(401,"Invalid Credential"));
    }
    const token = jwt.sign(
      {id:validuser._id},
      process.env.SECRET_KEY,
      );
      const {password:pass,...rest} = validuser._doc;

res.status(200).cookie('access_token',token,{
  httpOnly:true,
}).json(rest);
  }catch(err){
    next(err);
  }
}