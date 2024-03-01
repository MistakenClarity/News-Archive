import express from "express";
import { User } from "../models/userModel.js";
import  jwt from "jsonwebtoken";

const router = express.Router();

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.TOKEN_STRING, { expiresIn: '3d'});
}

//login user
router.post('/login', async(request, response)=> {
    const {username, password} = request.body;
    try {
        const user = await User.login(username, password);
        const token = createToken(user._id);
        response.status(200).json({username, token});        
    } catch (error) {
        response.status(400).json({message: error.message});
    };
});

//sign up user
router.post('/signup', async(request, response) => {
    const {username, password} = request.body;
    try {
        const user = await User.signup(username, password);
        const token = createToken(user._id);
        response.status(200).json({username, token});        
    } catch (error) {
        response.status(400).json({message: error.message});
    };
});

export default router;