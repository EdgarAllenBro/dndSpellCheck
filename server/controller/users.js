import { User } from "../db/model.js"
import bcrypt from "bcryptjs"


export default {
    addUser: async (req,res) => {
        let {userName,password,email} = req.body
        const isUser = await User.findOne({where:{userName:userName}})
        const emailUsed = await User.findOne({where:{email:email}})

    if(!isUser && !emailUsed){ 
        let passHash = bcrypt.hashSync(password)
        const newUser = await User.create({

        userName:userName,
        password:passHash,
        email:email

       })
       res.json(newUser)
    }else{
        res.json({message:'username or email already in use'})
    }

    },
    loginUser: async (req,res)=>{
        let {userName, password} = req.body
        const validUser = await User.findOne({where:{userName: userName}})
        if(validUser && bcrypt.compareSync(password, validUser.password)){
            let currentUser = {
                userId: validUser.userId,
                userName:validUser.userName,
                email:validUser.email
            }
            req.session.user = currentUser
            res.json(currentUser)
        }else{
            res.json({message:'no User matching that info'})
        }
    },
    sessionCheck: async (req,res)=>{
        console.log(req.session.user)
        if(req.session.user){
            res.json(req.session.user)
        } else{
            res.json({session:false})
        }
    }
}