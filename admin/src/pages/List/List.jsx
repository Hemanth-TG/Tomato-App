import React, { useContext, useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const[list,setList]=useState([]);


  const fetchList = async() => {
    try {
            const response=await axios.get(`${url}/api/food/list`);
            console.log(response.data);
            if(response.data.success) {
              setList(response.data.data);
              toast.success("Foods Fetched");
            }
            else {
              toast.error("Error fetching food list!");
            }
         }
    catch (error) {
        console.log(error);
        toast.error("Server error!");
    }
  }

  const removeFood = async(foodId) => {
    try {
      console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
    }
    catch(error) {
      console.log(error);
      toast.error("Server error!");
    }
  }
    

  useEffect(()=> {
    fetchList();
  },[]);
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item)=>{
            return (
              <div key={item._id} className='list-table-format'>
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default List
