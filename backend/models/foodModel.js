import mongoose from "mongoose"

const foodSchema=new mongoose.Schema({
    name: {type: String,required: true},
    description: {type: String,required: true},
    price: {type: Number,required: true},
    category: {type: String,required: true},
    image: {type:String,required: true}
})

const foodModel= mongoose.models.food || mongoose.model("food",foodSchema);

// Here OR is used differently. If mongoose.models.food exists, it will use that, if it doesnt exist, it will create a food model using mongoose.model("food",foodSchema);

export default foodModel;