import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemList from './ItemList'
import ItemListContainer from './ItemListContainer'
import Cat2500 from './Cat2500'
function Main() {
  return (
    <main>
        <Routes>
        <Route path="/cat2500" element={<ItemList category="2500" />} />
        <Route path="/cat3500" element={<ItemList category="3500" />} />
        <Route path="/home" element={<ItemList />} />
          
           
        </Routes>
        
    </main>
  )
}

export default Main