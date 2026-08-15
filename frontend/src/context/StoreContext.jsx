import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext=createContext(null);

const StoreContextFunction = (props) => {
    const url="https://tomato-app-ty6w.onrender.com";
    const[cartItems,setCartItems]=useState({});
    const [token,setToken]=useState("");
    const [food_list,setFoodList]=useState([]);

    const addToCart = (id) => {
        if(!cartItems[id]) {
            setCartItems(prev=>({...prev,[id]:1}));
        }
        else {
            setCartItems(prev=>({...prev,[id]:prev[id]+1}));
        }
    }

    const removeFromCart = (id) => {
        setCartItems(prev=>({...prev,[id]:prev[id]-1}));
    }

    const getSubTotal = () => {
        let totalAmount=0;
        for(const item in cartItems) {
            let itemInfo=food_list.find(product=>product._id===item);
            totalAmount+=itemInfo.price*cartItems[item];
        }
        return totalAmount;
    }

    const deliveryFee=2;

    const finalDeliveryFee=getSubTotal()<=0?0:deliveryFee;

    useEffect(() => {
        console.log(cartItems);
    },[cartItems])

    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }

    useEffect(()=> {
        const loadData = async () => {
            try {
                await fetchFoodList();
                if(localStorage.getItem("token")) {
                    setToken(localStorage.getItem("token"));
                }
            }
            catch(error) {
                toast.error("Server is not up, foods cannot be fetched. Sorry!");
            }
        }
        loadData();
    },[])

    const contextValue= {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getSubTotal,
        deliveryFee,
        finalDeliveryFee,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextFunction;