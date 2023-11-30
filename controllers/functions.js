import { User } from "../models/User.js";

export const getAllUsers =  async (req, res)=>{
    
    const users = await User.find({})
       
    console.log(req.query);
       res.json({
           success: true,
           users
       })
   }

export const postNewUser = async (req, res)=>{
    const {name, email, password}  = req.body;

        await User.create({name, email, password})
       
       res.status(201).cookie("tempi", "lol").json({
           success: true,
           message: "Signed Up succesfully"
       })
   } 





export const id = async(req,res)=>{
    
    const {id} = req.params;    
    const user = await User.findById(id)
    console.log(req.params);
    res.json({
        success: true,
        user,
    })

}