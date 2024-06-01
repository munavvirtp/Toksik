import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Pnf from './Pages/Pnf'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/ContactUs' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<Pnf/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App