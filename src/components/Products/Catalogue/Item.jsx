// import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({product}) => {

  return (
    <article style={{borderStyle:"groove"}}>
        <img style={{width:"20vw"}}src={product.img} alt={product.title} />
        <p>{product.title}</p>
        <p>{`$${product.price}`}</p>
        <Link to={`/products/item/${product.id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item