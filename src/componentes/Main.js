import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'

import ItemListContainer from './ItemListContainer'

import CartWidget from './CartWidget'



function Main() {

  return (
    <main>
        <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer  />} />   
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>  
        <Route path='/carrito' element={<CartWidget/>}/>
        </Routes>
        
    </main>
  )
}

export default Main