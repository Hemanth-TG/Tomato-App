import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({url}) => {
    const[image,setImage]=useState(false);
    const[data,setData]=useState({
        name: "",
        description: "",
        price: "",
        category: ""
    })

    const onChangeHandler= (event)=> {
        const name=event.target.name;
        const value=event.target.value;
        setData(prev=>({...prev,[name]: value}));
    }

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image);
        console.log(formData);
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: ""
        })
        setImage(false);
        toast.success(response.data.message);
        }
        else {
            toast.error(response.data.message);
        }
        }
        catch(error) {
            console.log(error);

            toast.error("Something went wrong!");
        }
    }

    useEffect(()=> {
        console.log(data);
    },[data])

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image-upload">
                    {/* {image.length>0 ? 
                    (
                        <div className='multiple-uploads'>
                            {image.map((img,index)=> (
                                <img key={index} src={URL.createObjectURL(img)}/>
                            ))}
                        </div>
                    ):
                    <img src={assets.upload_area}/>
                    } */}
                    <div className="single-upload">
                        <img src={image?URL.createObjectURL(image):assets.upload_area}/>
                    </div>
                    
                </label>
                {/* <input onChange={(e)=>{setImage(prev=> [...prev, ...Array.from(e.target.files)]);}} multiple type="file" id='image-upload' required />  */}
                <input onChange={(e)=>setImage(e.target.files[0])} id='image-upload' required type="file" />

                {/* prev=> [...prev, ...Array.from(e.target.files)] is used to append the newly selected files to the existing array of images in the state. This allows for multiple file uploads without overwriting the previous selections. */}
            </div>

            <div className="product-name flex-col">
                <label htmlFor="name-input">
                    <p>Product Name</p>
                </label>
                <input onChange={onChangeHandler}  value={data.name} type="text" name="name" id='name-input' placeholder='Type here'/>
            </div>

            <div className="product-description flex-col">
                <label htmlFor="description-input">
                    <p>Product Description</p>
                </label>
                <textarea onChange={onChangeHandler} value={data.description} name="description" id="description-input" rows='6' placeholder='Write description here'></textarea>
            </div>

            <div className="category-and-price">
                <div className="category flex-col">
                    <label htmlFor="category-input">
                        <p>Product Category</p>
                    </label>
                    <select onChange={onChangeHandler} value={data.category} name="category" id="category-input">
                        <option value="" disabled>Select a category</option>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>    
                    </select>
                </div>
                <div className="price flex-col">
                    <label htmlFor="price-input">
                        <p>Product Price</p>
                    </label>
                    <input onChange={onChangeHandler} value={data.price} type="number" name="price" id="price-input" placeholder='20$'/>
                </div>
            </div>
            <button className='add-btn'>ADD</button>
        </form>      
    </div>
  )
}
 
export default Add
