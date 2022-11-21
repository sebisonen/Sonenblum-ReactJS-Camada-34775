import {Link} from 'react-router-dom'

const Item = ({product}) => {

  return (
    <article  style={{width:"20vw", height:"30%"}}>
      <img  style={{height:"25rem", width:"100%", objectFit:"contain"}}src={product.img} alt={product.title} />
      <p style={{fontFamily:"Kanit"}}>{product.title}</p>
      <p style={{fontFamily:"Kanit"}}>{`$${product.price}`}</p>
      <Link style={{fontFamily:"Kanit"}} to={`/products/item/${product.id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item