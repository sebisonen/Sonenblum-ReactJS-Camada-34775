import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
const ItemDetail = ({product}) => {
  const [quantity, setQuantity] = useState(0)
  const onAdd = (unidades)=>{
      
      setQuantity(unidades)
      console.log(quantity)
  }
  return (
    <div style={{display:"flex", alignItems:"center"}} >
        
        <img style={{height:"80vh"}}src={product.img} alt="" />
        <div style={{display:"flex", flexDirection:"column", marginInline:"5vw"}} >
            <h2 style={{alignSelf:"end"}}>{product.title}</h2>
            <p style={{textAlign: "end"}}>{product.description}</p>
            <div style={{alignSelf:"end"}} >
                <ItemCount onAdd= {onAdd} product={product} initial={1}/>
            </div>
        </div>
   
    </div>
  )
}

export default ItemDetail