import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartDetail from "./CartDetail"
import {Link} from 'react-router-dom'

const Cart = () => {
  const {cart, calculateTotalPrice} =useContext(CartContext)

  if (cart.length===0){
    return(
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <h2>El carrito se encuentra vacío</h2>  
        <Link to="/products/category/All" >
          <h1 style={{borderStyle:"groove"}}>COMPRAR</h1>
        </Link>
      </div>      

    )
  }
  return (
    <div>
      {
        cart.map((cartProduct)=>
          <CartDetail cartProduct={cartProduct} key={cartProduct.id}/>
        )
      }
      <h2>Total:{calculateTotalPrice()} </h2>
      
    </div>
  )
}

export default Cart