import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Page } from './components/Page'
import Cart from './components/Cart'
import Header from './components/Header'

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
