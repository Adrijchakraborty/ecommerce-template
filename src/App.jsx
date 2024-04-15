import React from 'react'
import { Page } from './Page'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Page/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
