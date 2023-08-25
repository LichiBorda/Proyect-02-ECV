import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './Item'
import ItemListContainer from './ItemListContainer'
import ItemDetail from './ItemDetail'



function Main() {

  return (
    <main>
        <Routes>
        <Route path="/cat2500" element={<ItemList category="2500" />} />
        <Route path="" element={<ItemList category="2500" />} />
        <Route path="/cat3500" element={<ItemList category="3500" />} />
        <Route path="/10" element={<ItemListContainer />} />
      

          
           
        </Routes>
        
    </main>
  )
}

export default Main