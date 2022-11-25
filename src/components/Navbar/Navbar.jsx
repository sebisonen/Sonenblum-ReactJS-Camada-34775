import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import {Link, NavLink} from 'react-router-dom'
const Navbar=()=>{
    return(
        <nav >
            <div></div>
            <ul>
                <NavLink to='/products/category/All'>PRODUCTOS</NavLink>
                <Link to='/'>
                    <h1>GLKTK</h1>
                </Link>
                <NavLink to='/info'>INFORMACION</NavLink>
            </ul>
            <div><CartWidget/></div>
        </nav>
    )
}
export default Navbar