import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Home from './Page/Home'
import Product from './Page/Product'
import Layout from './Page/Layout'
import Posts from './Component/Posts'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/posts' element={<Posts />} />
        </Route>


      </Routes>

    </>
  )
}


export default App
