import foodModel from "../models/foodModel.js";
import fs from 'fs';

const addFood = async(req,res)=> {
    
    let image_name=req.file.filename;

    // testing
    console.log(image_name);

    const food=new foodModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: image_name
    })

    // testing
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.description);
    console.log(req.body.category);
    

    try {
        await food.save();
        res.json({success: true,message: "Food Added!"});
    }
    catch(error) {
        console.log(error);
        res.json({success: false,message: "Error!"})
    }
}

const listFood = async(req,res)=> {
    try {
        const foods=await foodModel.find({});
        res.json({success: true, data: foods});
    } catch (error) {
        res.json({success: false, message: "Error listing foods!"})
    }
    
}

const removeFood=async(req,res)=> {
    try {
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, async (error)=>{
            if(error) {
                console.log("Failed to delete the food image",error);
                return res.json({success: false, message: "Error deleting food image"})
            }
            console.log("Image deleted successfully");
            await foodModel.findByIdAndDelete(req.body.id);
            res.json({success: true, message: "Food Deleted!"});
        });
    }
    catch(error) {
        console.log("Error");
        res.json({success: false, message: "Error deleting food"});
    }
}

export {addFood,listFood,removeFood}