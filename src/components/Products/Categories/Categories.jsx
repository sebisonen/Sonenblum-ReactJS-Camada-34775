import { collection, getDocs} from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import {NavLink } from 'react-router-dom'
import { db } from '../../../services/firebaseConfig'
import '../products.css'
const Categories = () => {

  const [categories, setCategories]=useState([])

  useEffect(()=>{
    const collectionCat = collection(db, "categories")
    getDocs(collectionCat)

    .then((res)=>{
      const cats= res.docs.map((cat=>{
        return{
          ...cat.data(),
          id: cat.id
        }
      }))
      setCategories(cats)
      
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])


  
  return (
    <div className="productCategories">
        {categories.map((cat)=>
             <NavLink key={cat.id}to={`/products/category/${cat.path}`}> {cat.name}</NavLink>
          )
          
        }

    </div>
  )
}

export default Categories