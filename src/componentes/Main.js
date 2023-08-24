import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './ItemList'
import ItemListContainer from './ItemListContainer'
import ItemDetail from './ItemDetail'



function Main() {

  return (
    <main>
        <Routes>
        <Route path="/cat2500" element={<ItemList category="2500" />} />
        <Route path="/cat3500" element={<ItemList category="3500" />} />
        <Route path="" element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetail productos={ArrayProductos} />} />

          
           
        </Routes>
        
    </main>
  )
}

export default Main