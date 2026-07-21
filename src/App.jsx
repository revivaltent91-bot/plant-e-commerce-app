import Banner from './components/Banner'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import Footer from './components/Footer'
import { useState } from 'react'
import './App.css'

function App() {
  const [cart, updateCart] = useState([])
  const [activeCategory, setActiveCategory] = useState("")
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
