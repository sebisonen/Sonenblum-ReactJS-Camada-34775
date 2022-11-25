import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

import "./cart.css" 
const CartDetail=({cartProduct})=>{
    const {deleteOne}= useContext(CartContext)

    return(
        <article className="cartDetail">
            <img src={cartProduct.img} alt={cartProduct.title} />
            <p>{cartProduct.title}</p>
            <p >Precio: {`$${cartProduct.price}`}</p>
            <p >Cantidad: {cartProduct.quantity}</p>
            <p>Subtotal: ${cartProduct.quantity*cartProduct.price}</p>
            <button onClick={()=>deleteOne(cartProduct.id)}>Eliminar</button>
        </article>
        
    )
}

export default CartDetail