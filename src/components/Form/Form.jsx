import "./Form.css"
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, documentId, getDocs, serverTimestamp, writeBatch, query, where } from "firebase/firestore"
import { db } from "../../services/firebaseConfig"
import { Link } from "react-router-dom"
import RingLoader from "react-spinners/RingLoader";
import CartDetail from "../Cart/CartDetail"
import { useEffect } from "react"


const Form = ()=>{
   
    const [inputs, setInputs]=useState({})
    const {cart, calculateTotalPrice, deleteCart, findInCart} = useContext(CartContext)
    const [orderId, setOrderId]= useState("")
    const [loading, setLoading]=useState(false)
    const [divStock, setDivStock]=useState(false)
    const [noStockProd, setNoStockProd]=useState([])


    // Borrador e intento de validaciones
    const initialFormData={
        name: '',
        lastName: '',
        email: '', 
        repeatedEmail: '',
        address: ''
    }

    // // check errors
    // useEffect(()=>{
        
    // })
    // Fin del borrador
    const inputsHandler =(e)=>{
        setInputs({...inputs, [`${e.target.name}`]: `${e.target.value}` })
        console.log(inputs)
    }

    
    const handleSubmit= async(e)=>{
        e.preventDefault()
        setLoading(true)
        
        try {
            const order ={
                buyer: inputs.name+" "+inputs.lastName,
                items: cart,
                total: calculateTotalPrice(),
                date: serverTimestamp(),
                email:inputs.email,
                cellphone: inputs.cellphone,
                address: inputs.address,
            }
            const ids = cart.map((prod)=> prod.id)
            
            const productsRef =collection(db, "products")
            const FSProducts= await getDocs(
                query(productsRef, where(documentId(), "in", ids))
            );
            
            const {docs}= FSProducts
            const outOfStock =[]
            const batch = writeBatch(db)

            docs.forEach((doc)=>{
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock
                const cartProducts = cart.find((prod)=>prod.id===doc.id)
                const productQuantity = cartProducts?.quantity

                if(stockDB >= productQuantity){
                    batch.update(doc.ref, {stock: stockDB-productQuantity})
                }else{
                    outOfStock.push({id:doc.id, ...dataDoc})
                    console.log(dataDoc)
                    setNoStockProd(outOfStock)
                    
                };
            });
            if(outOfStock.length === 0){
                batch.commit()

                const ordersCollection = collection(db, "orders")
                const addedOrder = await addDoc(ordersCollection,order)
                
                setOrderId(addedOrder.id)
                deleteCart()
                
            }else{
                console.log("no hay stock de algun producto", noStockProd)
                // Hacer un map del array outof stcok, decirle cual es. Preguntarle si desea continuar con la compra. Hacer una funcion que saque el prod del cart que no haya stock
                setDivStock(true)
                
            }
        } catch (error) {
            console.log(error)

        }finally{
            setLoading(false)
        }
    }
    

    if(divStock){
        return(
            <div>
                <h2 style={{textAlign:"center"}}>No hay stock de los siguientes productos</h2>
                {
                noStockProd?.map((prod)=>{
                    const ref = findInCart(prod.id)
                    return <CartDetail cartProduct={{...prod, quantity: ref.quantity}} key={prod.id}/>
                })
                }
            </div>
        )
    }

    if(orderId){
        return(
            <div>
                <h2> Gracias por tu compra. Tu numero de orden es {orderId}</h2>
                <Link to="/products/category/All" >
                    <button>
                        <h3 >COMPRAR</h3>
                    </button>
                </Link>
            </div>

        )
    }
    if(loading){
        return(
        <div style={{width:"100vw", height:"80vh", display:"flex",justifyContent:"center", alignItems:"center"}} >
           <RingLoader color="rgba(158, 9, 182, 1)"/>
        </div>
        )
    }
    
    return(
        <div className="shopOrderFormContainer">
            
            <form className="shopOrderForm" onSubmit={handleSubmit} action="">
                <fieldset className="">
                    <label htmlFor="name">Nombre</label>
                    <input value={inputs.name} onChange={inputsHandler} type="text" name="name" placeholder="Nombre"/>
                </fieldset>
                <fieldset className="">
                    <label htmlFor="lastName">Apellido</label>
                    <input value={inputs.lastName} onChange={inputsHandler} type="text" name="lastName" placeholder="Apellido" />
                </fieldset>

                <fieldset className="">
                    <label htmlFor="email">E-mail</label>
                    <input value={inputs.email} onChange={inputsHandler}   type="email" name="email" placeholder="E-Mail" />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="repeatedEmail">Repetir E-mail</label>
                    <input value={inputs.repeatedEmail} onChange={inputsHandler}  type="email" name="repeatedEmail" placeholder="Repetir E-mail" />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="address">Dirección</label>
                    <input value={inputs.address} onChange={inputsHandler}  type="text" name="address" placeholder="Dirección" />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="cellphone">Celular</label>
                    <input value={inputs.cellphone} onChange={inputsHandler} type="tel" name="cellphone" placeholder="Celular" />
                </fieldset>
                <div >
                    <button className="checkout-btn">Enviar</button>
                    
                </div>
                
            </form>
        </div>
    )
}

export default Form;