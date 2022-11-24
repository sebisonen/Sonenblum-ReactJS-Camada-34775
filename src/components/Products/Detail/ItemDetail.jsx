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
  if(product.title===undefined){
    return(
      <h1>Page not found</h1>
    )    
  }

  return (
    <div style={{display:"flex", alignItems:"center"}} >
        
        <img style={{height:"80vh", margin:"0 30px"}}src={product.img} alt="" />
        <div style={{display:"flex", flexDirection:"column", marginInline:"5vw"}} >
            <h2 style={{alignSelf:"end"}}>{product.title}</h2>
            <p style={{textAlign: "end"}}>{product.description}</p>
            <div style={{alignSelf:"end"}} >
             {
              product.stock===0?
              <div style={{padding: "10px",
                margin: "0",
                color: "#ffffff",
                backgroundColor: "#aa66ccb0",
                borderRadius: "3px",
                fontFamily: "Libre Franklin",
                fontSize: "1 rem"}}>No hay stock</div>:
              <ItemCount onAdd= {onAdd} product={product}  initial={isInCart(product.id)?cartProduct.quantity:1}/>
             }
                
            </div>
        </div>
   
    </div>
  )
}

export default ItemDetail