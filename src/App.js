

import Navbar from './componentes/Navbar'

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
