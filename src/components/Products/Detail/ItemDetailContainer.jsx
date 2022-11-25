import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
// import { productsMock } from '../../../mock-products/mock-products';
import {useParams} from 'react-router-dom'
import RingLoader from "react-spinners/RingLoader";
import { doc, collection, getDoc } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id}=useParams()
    const [loading, setLoading]=useState(true)
    
    useEffect(() => {
        const collectionProd = collection(db, "products")
        const ref= doc(collectionProd, id)
        getDoc(ref)
        .then((res)=>{
            setProduct({
                id: res.id,
                ...res.data(),
            });
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)});
        return ()=> setLoading(true)
    }, [id]);

    if(loading){
        return(
        <div style={{maxWidth:"100vw", height:"80vh" ,display:"flex",justifyContent:"center", alignItems:"center"}} >
           <RingLoader color="rgba(158, 9, 182, 1)"/>
        </div>
        )
    }
    
    return (
        <ItemDetail product={product}/>   
    )
}

export default ItemDetailContainer