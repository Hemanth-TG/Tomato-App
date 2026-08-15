import userModel from "../models/userModel.js";
import validator from "validator"
import bycrpt from "bcrypt"
import jwt from "jsonwebtoken"

const loginUser = async(req,res) => {
    const {email,password}=req.body;
    try {
        const user=await userModel.findOne({email});
        if(!user) {
            return res.json({success: false, message: "User doesn't exist"});
        }

        const isMatch=await bycrpt.compare(password,user.password);

        if(!isMatch) {
            return res.json({success: false, message: "Invalid credentials"});
        }

        const token=createToken(user._id);
        res.json({success: true,token});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error!"})
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET_KEY);
}

const registerUser = async(req,res) => {
    const {name,email,password}=req.body;
    try {
        // check if email already exists
        const exists= await userModel.findOne({email});
        if(exists) {
            return res.json({success: false, message: "Email already exists!"});
        }

        // validate email and password
        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "Invalid email"});
        }

        if(password.length<8) {
            return res.json({success: false, message: "Password length too short, must be greater 8"});
        }

        const salt= await bycrpt.genSalt(10);
        const hashedPassword= await bycrpt.hash(password,salt);

        const newUser=new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        // generate a token, save user so that you will be able to access user._id since MongoDB creates id for you
        const user=await newUser.save();

        const token=createToken(user._id);

        res.json({success: true, token});


    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error creating an user"});
    }
}

export {loginUser,registerUser};