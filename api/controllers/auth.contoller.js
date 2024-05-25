import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All field are required" });
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
    res.status(400).json({message:err.message})
  }
};
