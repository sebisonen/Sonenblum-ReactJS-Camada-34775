import React, {useState} from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "../products.css"

const ItemCount = (props) =>{
    const {stock} = props.product
    let [count, setCount] = useState(props.initial)
    let increment = () =>{
        setCount(count+1)
    }
    let decrement = () =>{
        setCount(count-1)
    }
    const{findInCart, isInCart} = useContext(CartContext)
    const cartProduct = findInCart(props.product.id)
    return (
        <div className="card">
            
            <div style={{display: `flex`, justifyContent:`center`, alignItems:`center`}}>
                <button disabled={count===0} type= "button" className="count-btn" onClick={decrement}>-</button>
                <p style={{margin: "5px"}}>{count}</p>
                <button disabled={count===stock}type= "button" className="count-btn" onClick={increment}>+</button>
            </div>
            
            {
                isInCart(props.product.id)?
                <button disabled={count===0} className="addProduct-btn" onClick={()=>props.onAdd(count)}>
                    {cartProduct.quantity!==count?
                        "Modificar":
                        <Link to="/cart">Ir al carrito</Link>
                    }
                </button>:
                <button disabled={count===0} className="addProduct-btn" onClick={()=>props.onAdd(count)}>
                Agregar al carrito
                 </button>
            }

        </div>
    )
    
}
export default ItemCount