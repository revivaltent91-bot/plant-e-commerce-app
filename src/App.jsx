import Banner from './components/Banner'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import Footer from './components/Footer'
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const cardInLocal = localStorage.getItem("cart")
  const [cart, updateCart] = useState(cardInLocal ? JSON.parse(cardInLocal) : [])
  const [activeCategory, setActiveCategory] = useState("")
  const isFirstRender = useRef(true)
  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart))

  })
  return (
    <>
      <Banner />
      <div className="shop-layout">
        <Cart
          cart={cart}
          updateCart={updateCart}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="shop-layout__catalog">
          <ShoppingList cart={cart}
            updateCart={updateCart}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}

          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
