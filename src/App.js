import "./assets/Fonts.css"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemDetailContainer from "./components/Products/Detail/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import ProductsMain from "./components/Products/ProductsMain";
import EnDesarrollo from './components/EnDesarrollo'
import Form from "./components/Form/Form";
function App() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        {/* <Route path='/products/category/All' element={<ProductsMain/>}/> */}
        <Route path='/products/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/category/:categoryName' element={<ProductsMain/>}/>
        <Route path="/home" element={<EnDesarrollo/>}/>
        <Route path="/info" element={<EnDesarrollo/>}/>
        <Route path="/contact" element={<EnDesarrollo/>}/>
        <Route path ='/error' element={<h1>Error</h1>}/>{/*Crear error page*/}
        <Route path='*' element={<h1>Page not found</h1>}/>{/*Este path es para que cuando alguien mete mano en el url y este no existe te tire X componente*/}
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
