import "./assets/Fonts.css"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import NavbarDrip from "./components/NavbarDrip/NavbarDrip"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
function App() {

   let mensaje= "Falta 1 mes para el lanzamiento de esta pagina"
   
  return (
    <div className="App">
      <Navbar backgroundColor="#A020F0"/>
        <NavbarDrip/>
      
      <ItemListContainer font={"Libre Franklin"} greeting={mensaje}/>
      
    </div>
  );
}

export default App;
