
import Item from "./Item"
const ItemList = ({products})=>{

    return(
        <div className="itemList">
            {products.map((product)=>{
                return(
                    <Item key={product.id} product={product}/>
                )
            })}
        </div>
    )
}

export default ItemList