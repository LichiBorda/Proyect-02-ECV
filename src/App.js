

import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer';
import Pruebas from './componentes/Pruebas';
import ItemList from './componentes/ItemList';
import { BrowserRouter } from 'react-router-dom';
import Main from './componentes/Main';
function App() {
  return (
    
    <>
    <BrowserRouter> 
    <Navbar />
    <Main/> 
    </BrowserRouter>
    
    </>
   
  );
}

export default App;
