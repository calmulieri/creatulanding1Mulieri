import './App.css';                           // Estilos generales
import NavBar from "./components/NavBar.jsx"; //Barra de navegacion
import ItemListContainer from "./components/ItemListContainer";
function App() {
   return (
    <>
    <NavBar />
    <ItemListContainer welcome="Bienvenido a la tienda de Charly..."/>
    </>
  )
}
export default App
