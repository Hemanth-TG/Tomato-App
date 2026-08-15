import express from "express";
import multer from "multer";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";

const foodRouter=express.Router();

// const storage=multer.diskStorage({
//     destination:"uploads",
//     filename: (request,filee,callback) => {
//         if(!filee.originalname.toLowerCase().endsWith(".png")) {
//             return callback(new Error("Only PNG files allowed"),null);
//         }

//         return callback(null,`${Date.now()}${filee.originalname}`)
//     }
// });

// const upload=multer({storage: storage});

const storage=multer.diskStorage({
    destination: "uploads",
    filename: (req,file,callback)=> {
        return callback(null,`${Date.now()}${file.originalname}`);
    }
});

const upload=multer({storage: storage,fileFilter: (req,file,callback)=> {
    if(file.mimetype==="image/png") {
            callback(null,true);
        }
        else {
            callback(new Error("Only PNG files are allowed."))
        }
}});

foodRouter.post('/add',upload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);

export default foodRouter;