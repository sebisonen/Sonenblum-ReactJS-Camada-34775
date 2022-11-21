import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const ItemDetail = ({product}) => {
  
  const {addToCart, isInCart, findInCart} = useContext(CartContext)

  const onAdd = (quantity)=>{  
      addToCart(quantity, product)
  }
  const cartProduct = findInCart(product.id)
 
  return (
    <div style={{display:"flex", alignItems:"center"}} >
        
        <img style={{height:"80vh", margin:"0 30px"}}src={product.img} alt="" />
        <div style={{display:"flex", flexDirection:"column", marginInline:"5vw"}} >
            <h2 style={{alignSelf:"end"}}>{product.title}</h2>
            <p style={{textAlign: "end"}}>{product.description}</p>
            <div style={{alignSelf:"end"}} >
                <ItemCount onAdd= {onAdd} product={product}  initial={isInCart(product.id)?cartProduct.quantity:1}/>
            </div>
        </div>
   
    </div>
  )
}

export default ItemDetail