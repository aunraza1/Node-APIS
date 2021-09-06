const authModel =require('../Models/authSchema')
const bcrypt= require('bcryptjs')


const userSignUp= async(req,res)=>{
    let checkUser= await authModel.findOne({email:req.body.email})
    if(checkUser){
        res.status(200).send({message:"Email Already Exist"})
    }
    else{
        let hashPass= await bcrypt.hash(req.body.password,12)
        let createUser= new authModel({
            name:req.body.name,
            password:hashPass,
            email:req.body.email,
            userType:req.body.userType
        })
        createUser.save().then(()=>{
            res.status(200).send({message:"Sign up Successful",result:createUser})
        })
    }
}

const userSignIn= async(req,res)=>{
    const checkUser= await authModel.findOne({email:req.body.email,userType:req.body.userType})
    if(checkUser){
        const checkPass= await bcrypt.compare(req.body.password,checkUser.password)
        if(checkPass){
            res.status(200).send("Sign in Successfull!")
        }
        else{
            res.status(200).send("Wrong Credentials")
        }
    }
    else{
        res.send("Wrong Credentials")
    }
}


module.exports={
    userSignUp,
    userSignIn

}