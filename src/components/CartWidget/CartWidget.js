// import cart from "./assets/cart.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget=()=>{

    return(
        <div>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span>7</span>
        </div>
    )
}
 export default CartWidget