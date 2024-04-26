import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Page } from './components/Page'
import Cart from './components/Cart'
import Header from './components/Header'
import Details from './components/Details'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Page/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
