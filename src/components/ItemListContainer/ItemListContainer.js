// import "../../assets/Fonts.css"
const ItemListContainer = (props)=>{
    
    return(
        <p style={{fontFamily: props.font, fontSize: "1.5rem"}}>{props.greeting}</p>
    )
}
export default ItemListContainer