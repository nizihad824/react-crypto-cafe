import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Homepage />} />
        <Route path='/coins' element={<Coins />} />


        <Route path='/contact' element={<Contact />}>

        </Route>
      </Routes>

      <Footer></Footer>
    </div>
  )
}

export default App
