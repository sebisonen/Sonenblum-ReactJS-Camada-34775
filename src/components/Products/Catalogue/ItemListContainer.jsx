import ItemList from "./ItemList"
import { productsMock } from "../../../mock-products/mock-products";
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

const ItemListContainer = ()=>{

    const [products, setProducts] = useState([]);
    const {categoryName} = useParams()
    useEffect(() => {
        
        const getProducts = () => {
            return new Promise((res, rej) => {
                const filteredProducts = productsMock.filter((prod)=>prod.category===categoryName)
                const prod=filteredProducts.length===0?productsMock:filteredProducts
                setTimeout(() => {
                    res(prod);
                }, 2000);
            });
        };
        getProducts()
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

    return(
        <div className="itemListContainer">
            <ItemList products={products}/>    
        </div>
    )
}
export default ItemListContainer