import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { productsMock } from '../../../mock-products/mock-products';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id}=useParams()
    
    useEffect(() => {
        const getSingleProduct = () => {
            return new Promise((res, rej) => {
                const productMock = productsMock.find((prod)=>prod.id===parseInt(id))        
                setTimeout(() => {
                    res(productMock);
                }, 2000);
            });
        };
        getSingleProduct()
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer