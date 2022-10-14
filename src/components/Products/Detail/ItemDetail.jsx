import React from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({product}) => {
  return (
    <div style={{display:"flex", alignItems:"center"}} >
        
        <img style={{height:"80vh"}}src={product.img} alt="" />
        <div style={{display:"flex", flexDirection:"column"}} >
            <h2 >{product.title}</h2>
            <p>{product.description}</p>
            <div style={{alignSelf:"end"}} >
                <ItemCount product={product} initial={1}/>
            </div>
        </div>
   
    </div>
  )
}

export default ItemDetail