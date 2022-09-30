import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar=(props)=>{
    return(
        <nav style={{backgroundColor:props.backgroundColor, display: "flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <div></div>
            <ul style={{width: "50vw",display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <li>inicio</li>
                <li>productos</li>
                <h1>GLKTK</h1>
                <li>informacion</li>
                <li>contacto</li>
            </ul>
            
            <CartWidget/>
            
        </nav>
    )
}
export default Navbar