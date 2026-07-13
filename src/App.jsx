import { useState } from 'react'
import Banner from './components/Banner'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import './App.css'

function App() {

  return (
    <>
      <Banner />
      <div className="shop-layout">
        <Cart />
        <div className="shop-layout__catalog">
          <ShoppingList />
        </div>
      </div>
    </>
  )
}

export default App
