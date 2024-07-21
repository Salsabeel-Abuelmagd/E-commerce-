import React, { createContext ,useState} from "react";
import products from "../Components/Assets/Products"

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart={};
    for(let i=0; i<products.length + 1; i++){
        cart[i]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems,setCratItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCratItems((prev)=>({...prev,[itemId]: prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCratItems((prev)=>({...prev,[itemId]: prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = products.find ( (product) => product.id===Number(item) ) ;
                totalAmount += itemInfo.new_price * cartItems[item];

            }
        }           return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItems = 0;
        for ( const item in cartItems){
            if(cartItems[item]>0){
                totalItems+= cartItems[item];
            }
        }return totalItems;
    }

    const contextValue = {products,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider; 