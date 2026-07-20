import Banner from './components/Banner'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import './App.css'
import Footer from './components/Footer'

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
      <Footer/>
    </>
  )
}

export default App
