import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FoodDetails from './components/foodDetails/foodDetails'
import Home from './components/Home/Home'
import Salads from './components/menu/Salads'
import Soups from './components/menu/Soups'
import Navbar from './components/navbar/navbar'
import Store from './components/store/store'
import './index.css'

const Root = () => {
  return (
    <div className='root'>
      <Router>
        <Routes>
          <Route element={<Navbar />}>
            <Route path='/' element={<Home />} />
          <Route path='/salads' element={<Salads />} />
          <Route path='/salads/:id' element={<FoodDetails />} />
          <Route path='/soups' element={<Soups />} />
          <Route path='/soups/:id' element={<FoodDetails />} />
          <Route path='/store' element={<Store />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Root