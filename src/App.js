import "./assets/Fonts.css"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemDetailContainer from "./components/Products/Detail/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import ProductsMain from "./components/Products/ProductsMain";
import Home from './components/Home/Home'
import Form from "./components/Form/Form";
import Provider from "./context/CartContext";
import Informacion from "./components/Informacion/Informacion";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider > 
      <BrowserRouter >
        <Navbar />
        
        <Routes>
          {/* <Route path='/products/category/All' element={<ProductsMain/>}/> */}
          <Route path='/products/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products/category/:categoryName' element={<ProductsMain/>}/>
          <Route path="" element={<Home/>}/>
          <Route path="/info" element={<Informacion/>}/>
          <Route path ='/error' element={<h1>Error</h1>}/>{/*Crear error page*/}
          <Route path='*' element={<h1>Page not found</h1>}/>{/*Este path es para que cuando alguien mete mano en el url y este no existe te tire X componente*/}
          <Route path="/checkout" element={<Form/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
