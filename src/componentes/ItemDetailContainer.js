import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getProductById} from './AsyncMock'

function ItemDetailContainer() {
  const [producto, setProducto]= useState({})
  const params = useParams()
  console.log(params.id)
  useEffect(()=>{
    getProductById(params.id)
    .then((res)=> setProducto(res))
  },[])
  return (
   <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer