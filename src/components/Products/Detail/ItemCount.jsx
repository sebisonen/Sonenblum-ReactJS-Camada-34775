import React, {useState} from "react";
import "../products.css"

const ItemCount = ({product, initial}) =>{
    const {stock} = product
    let [count, setCount] = useState(initial)
    let increment = () =>{
        setCount(count+1)
    }
    let decrement = () =>{
        setCount(count-1)
    }
    return (
        <div className="card">
            <div style={{display: `flex`, justifyContent:`center`, alignItems:`center`}}>
                <button disabled={count===0} type= "button" className="count-btn" onClick={decrement}>-</button>
                <p style={{margin: "5px"}}>{count}</p>
                <button disabled={count===stock}type= "button" className="count-btn" onClick={increment}>+</button>
            </div>
            <button disabled={count===0} className="addProduct-btn">Agregar al carrito</button>
        </div>
    )
    
}
export default ItemCount