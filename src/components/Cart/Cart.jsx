import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartDetail from "./CartDetail"
import {Link} from 'react-router-dom'
// import "./cart.css"

const Cart = () => {
  const {cart, calculateTotalPrice, deleteCart} =useContext(CartContext)

  if (cart.length===0){
    return(
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <h2>El carrito se encuentra vacío</h2>  
        <Link to="/products/category/All" >
          <button>
          <h1 >COMPRAR</h1>
          </button>
        </Link>
      </div>      

    )
  }
  return (
    <div className="cartLayout">
      {
        cart.map((cartProduct)=>
          <CartDetail cartProduct={cartProduct} key={cartProduct.id}/>
        )
      }
      <h2>Total: ${calculateTotalPrice()} </h2>
      <div className="deleteCart">
        <button style={{margin:"5px"}}onClick={()=>deleteCart()}>Vaciar carrito</button>
        <Link to="/checkout">
          <button className="checkout-btn" >Checkout</button>
        </Link>
      </div>
      
      
    </div>
  )
}

export default Cart