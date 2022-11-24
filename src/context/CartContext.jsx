import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const Provider = (props) =>{
    const [cart, setCart] = useState([])
    const addToCart = (quantity, product)=>{
        const cartProduct = {quantity, ...product}
        isInCart(product.id)?
        addSameProduct(cartProduct)
        :setCart([...cart, cartProduct])
    }

    const isInCart = (id )=> cart.some((prod)=> prod.id === id)
    const findInCart = (id) => cart.find((prod)=>id===prod.id)
    
    const addSameProduct = (newProduct)=>{
        setCart(cart.map((cartProduct)=>
            cartProduct.id===newProduct.id?
            {...cartProduct, quantity: newProduct.quantity}:
            cartProduct
        ))
    }
    const deleteCart = () => setCart([])
    const deleteOne = (id) => setCart(cart.filter((prod)=>prod.id !== id))
    const calculateTotalPrice = () => cart.reduce((counter,product)=>counter+product.quantity*product.price,0)
    const calculateItemAmount = () => cart.reduce((counter,product)=>counter+product.quantity,0)
    
    return(
        <CartContext.Provider value={{addToCart, cart, deleteCart, deleteOne, isInCart, findInCart, calculateItemAmount, calculateTotalPrice}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default Provider