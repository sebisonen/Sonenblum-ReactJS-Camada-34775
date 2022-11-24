import ItemList from "./ItemList"
// import { productsMock } from "../../../mock-products/mock-products";
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";



const ItemListContainer = ()=>{

    const [products, setProducts] = useState([]);
    const {categoryName} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const collectionProd = collection(db, "products")
        const q =query(collectionProd, where("category", "==", categoryName))
        getDocs(categoryName==="All"?collectionProd:q)

        .then((res)=>{
            const prods = res.docs.map((prod)=>{
                return{
                    id: prod.id,
                    ...prod.data(),
                };
            });

            setProducts(prods)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)});
        return ()=> setLoading(true)
    }, [categoryName]);

    if(loading){
        return(
        <div style={{width:"100vw", display:"flex",justifyContent:"center", alignItems:"center"}} >
           <RingLoader color="rgba(158, 9, 182, 1)"/>
           
        </div>
        )
    }

    return(

        <div >
           <ItemList products={products}/>   
            
        </div>
    )
}
export default ItemListContainer



// const getProducts = () => {
//     return new Promise((res, rej) => {
//         const filteredProducts = productsMock.filter((prod)=>prod.category===categoryName)
//         const prod = filteredProducts.length===0?productsMock:filteredProducts
//         setTimeout(() => {
//             res(prod);
//         }, 1000);
//     });
// };
// getProducts()
//     .then((res) => {
//         setProducts(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(()=>{
//         setLoading(false)
//     });
//     return ()=> setLoading(true)
// }