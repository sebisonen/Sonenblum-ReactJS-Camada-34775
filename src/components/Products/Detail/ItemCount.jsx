import React, {useState} from "react";
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
    return (
        <div className="card">
            <div style={{display: `flex`, justifyContent:`center`, alignItems:`center`}}>
                <button disabled={count===0} type= "button" className="count-btn" onClick={decrement}>-</button>
                <p style={{margin: "5px"}}>{count}</p>
                <button disabled={count===stock}type= "button" className="count-btn" onClick={increment}>+</button>
            </div>
            <button disabled={count===0} className="addProduct-btn" onClick={()=>props.onAdd(count)}>Agregar al carrito</button>
        </div>
    )
    
}
export default ItemCount