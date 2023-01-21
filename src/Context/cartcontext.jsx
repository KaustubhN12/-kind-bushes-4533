import { useState,createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartItem,setcartItem] = useState([]);

    return <CartContext.Provider value={{cartItem,setcartItem}}>
        {children}
    </CartContext.Provider>

}

export default CartContextProvider