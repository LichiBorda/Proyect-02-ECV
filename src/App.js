
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer';
import Pruebas from './componentes/Pruebas';
import ContainerProducts from './componentes/ContainerProducts';


function App() {
  return (
    <>
   <Navbar />
   <ItemListContainer greeting="Bienvenidos a mi pagina"/>
   <ContainerProducts/>
   <Pruebas/>


   </>
  );
}

export default App;
