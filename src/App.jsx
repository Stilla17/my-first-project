import React, { useRef, useState } from 'react'
import Layout from './Pages/Layout'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Settings from './Pages/Settings'
import Shop from './Pages/Shop'

const App = () => {

  return (
    <div>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/shop' element={<Shop />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App