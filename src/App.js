

import Navbar from './componentes/Navbar'

import { BrowserRouter } from 'react-router-dom';
import Main from './componentes/Main';
import Micustomprovider from './componentes/CartContext';

function App() {
  return (
    
    <Micustomprovider>

    <BrowserRouter> 
    <Navbar />
    <Main/> 
    
    </BrowserRouter>
    
    </Micustomprovider>
    
   
  );
}

export default App;
