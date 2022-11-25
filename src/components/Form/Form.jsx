import "./Form.css"
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, documentId, getDocs, serverTimestamp, writeBatch, query, where } from "firebase/firestore"
import { db } from "../../services/firebaseConfig"
import { Link } from "react-router-dom"
import RingLoader from "react-spinners/RingLoader";

// Hook form
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Form = ()=>{
    const {cart, calculateTotalPrice, deleteCart, deleteOne} = useContext(CartContext)
    const [orderId, setOrderId]= useState("")
    const [loading, setLoading]=useState(false)
    
    const schema = yup.object().shape({
        name: yup.string("Solo se aceptan letras").required("Este campo es obligatorio") ,
        lastName: yup.string("Solo se aceptan letras").required("Este campo es obligatorio"),
        email: yup.string("Solo se aceptan letras").email("Ingrese un email valido").required("Este campo es obligatorio"), 
        repeatedEmail: yup.string("Solo se aceptan letras").oneOf([yup.ref("email"),null]),
        address: yup.string("Solo se aceptan letras").min(8,"Minimo 8 caracteres").required("Este campo es obligatorio"),
        cellphone:yup.number().required("Este campo es obligatorio")
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit=async (data)=>{
        setLoading(true)
        try {
            const order ={
                buyer: data.name+" "+data.lastName,
                items: cart,
                total: calculateTotalPrice(),
                date: serverTimestamp(),
                email:data.email,
                cellphone: data.cellphone,
                address: data.address,
            }
            const ids = cart.map((prod)=> prod.id)
            const productsRef =collection(db, "products")
            const FSProducts= await getDocs(
                query(productsRef, where(documentId(), "in", ids))
            );
            const {docs}= FSProducts
            let outOfStock =[]
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
                };
            });
            if(outOfStock.length === 0){
                batch.commit()
                const ordersCollection = collection(db, "orders")
                const addedOrder = await addDoc(ordersCollection,order)
                setOrderId(addedOrder.id)
                deleteCart()
            }else{
                outOfStock.map((prod)=>deleteOne(prod.id))
                outOfStock=[]
                alert("Nos quedamos sin stock de alguno de los productos. Se han eliminado de su carrito. Vuelva a realizar la compra")
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
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
            
            <form className="shopOrderForm" onSubmit={handleSubmit(onSubmit)}>
                
                <fieldset>
                    <label htmlFor="name">Nombre</label>
                    <input 
                            name= "name"
                            type="text" 
                            {...register("name")}
                            autoComplete="off"
                            placeholder="Nombre"/>
                    <p>{errors.name?.message}</p>
                </fieldset>
                <fieldset >
                    <label htmlFor="lastName">Apellido</label>
                    <input 
                            name= "lastName"
                            type="text"
                            {...register("lastName")}
                            autoComplete="off"
                            placeholder="Apellido" />
                            <p>{errors.lastName?.message}</p>
                </fieldset>

                <fieldset>
                    <label htmlFor="email">E-mail</label>
                    <input 
                            name= "email"
                            type="email"
                            {...register("email")}
                            autoComplete="off"
                            placeholder="E-Mail" />
                    <p>{errors.email?.message}</p>    
                </fieldset>
                <fieldset >
                    <label htmlFor="repeatedEmail">Repetir E-mail</label>
                    <input 

                            name= "repeatedEmail"
                            type="email"
                            {...register("repeatedEmail")}
                            autoComplete="off"
                            placeholder="Repetir E-mail" />
                    <p>{errors.repeatedEmail?.message&&"Deben coincidir los emails"}</p>    
                </fieldset>
                <fieldset >
                    <label htmlFor="address">Dirección</label>
                    <input 
                            name="address"
                            type="text"
                            {...register("address")}
                            autoComplete="off"
                            placeholder="Dirección" />
                    <p>{errors.address?.message}</p>    
                </fieldset>
                <fieldset >
                    <label htmlFor="cellphone">Celular</label>
                    <input 
                            name="cellphone"
                            type="text"
                            {...register("cellphone")}
                            autoComplete="off"
                            placeholder="Celular" />
                    <p>{errors.cellphone?.type==="typeError"?
                    "Ingrese un numero valido":
                    errors.cellphone?.message}</p>    
                </fieldset>
                <div >
                    <button  className="checkout-btn">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;