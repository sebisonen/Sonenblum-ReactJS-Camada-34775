
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const CartWidget=()=>{
    const {calculateItemAmount}=useContext(CartContext)
    const itemAmount= calculateItemAmount()
    return(
        <Link style= {{color: "white"}}to='/cart' element={<Cart/>}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span>{itemAmount===0?"":itemAmount}</span>
        </Link>
    )
}
 export default CartWidget