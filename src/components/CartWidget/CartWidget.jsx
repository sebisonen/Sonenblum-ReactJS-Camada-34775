// import cart from "./assets/cart.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
const CartWidget=()=>{

    return(
        <Link style= {{color: "white"}}to='/cart' element={<Cart/>}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span>7</span>
        </Link>
    )
}
 export default CartWidget