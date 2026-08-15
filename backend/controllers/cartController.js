import express from "express";
import userModel from "../models/userModel.js";

// add to user cart data

const addToCart = async(req,res) => {
    try {
        let userData=await userModel.findById(req.body.userId);
        let cartItems=userData.cartData;
        if(!cartItems[req.body.itemId]) {
            cartItems[req.body.itemId]=1;
        }
        else {
            cartItems[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData: cartItems})
        res.json({success: true, message: "Added to cart"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error adding to cart"});
    }
}


// remove from user cart data
const removeFromCart = async(req,res)=> {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartItems = userData.cartData;
        if (cartItems[req.body.itemId]>0) {
            cartItems[req.body.itemId] -= 1;
        }
        else {
            delete cartItems[req.body.itemId];
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData: cartItems});
        res.json({success: true, message: "Removed From Cart"})
    }
    catch(error) {
        console.log(error);
        res.json({success: false, message: "Error removing from cart"});
        
    }
}

// fetch user cart data

const getCart = async(req,res)=> {
    try {
        let userData=await userModel.findById(req.body.userId);
        let cartItems=userData.cartData;
        res.json({success: true, cartData: cartItems});
    }
    catch(error) {
        console.log(error);
        res.json({success: false, message: "Error fetching cart food"})
    }
}

export {addToCart,removeFromCart,getCart};