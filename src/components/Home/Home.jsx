import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {
  return (
    <main className='home' >
        
          <Link to='/products/category/All'><button className='drip'>COMPRAR</button></Link>
    </main>
  )
}

export default Home