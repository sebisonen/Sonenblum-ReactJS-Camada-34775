import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import {Link, NavLink} from 'react-router-dom'
const Navbar=()=>{
    return(
        <nav>
            <div></div>
            <ul>
                <NavLink to='/home'>INICIO</NavLink>
                <NavLink to='/products/category/All'>PRODUCTOS</NavLink>
                <Link to='/home'>
                    <h1>GLKTK</h1>
                </Link>
                <NavLink to='/info'>INFORMACION</NavLink>
                <NavLink to='/contact'>CONTACTO</NavLink>
            </ul>
            <div><CartWidget/></div>
            
            
        </nav>
    )
}
export default Navbar