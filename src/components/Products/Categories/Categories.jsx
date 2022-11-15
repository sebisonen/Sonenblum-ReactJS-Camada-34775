import {NavLink } from 'react-router-dom'
import '../products.css'
const Categories = () => {
    return (
    <div className="productCategories">
        <NavLink to='/products/category/All'> Todos</NavLink>
        <NavLink to='/products/category/Tops'> Tops</NavLink>
        <NavLink to='/products/category/Buzos'>Buzos</NavLink>
        <NavLink to='/products/category/Corsets'>Corsets</NavLink>
    </div>
  )
}

export default Categories