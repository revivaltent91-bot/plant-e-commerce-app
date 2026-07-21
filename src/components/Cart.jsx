import { useState, useEffect, useRef } from 'react'
import '../styles/Cart.css'

export default function Cart({ cart, updateCart, activeCategory, setActiveCategory }) {
    const [isOpen, setIsOpen] = useState(false)
    const isFirstRender = useRef(true)
    const basketTotal = cart.reduce(
        (total, currentItem) => total + (currentItem.amount * currentItem.price), 0)

    const handleBasket = () => {
        updateCart([])
        if (localStorage.getItem("cart")) {
            localStorage.removeItem("cart")
        }
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
      //  alert(`J'aurai ${basketTotal}$ à payer 💸`)
        document.title = `LMF -${basketTotal}$ d'achats`
        const basket = localStorage.getItem("cart")
        console.log(basket, JSON.parse(basket))
        if (basket) {
            updateCart(JSON.parse(basket))
        }
    }, [])


    return isOpen ? (
        <div className="shop-layout__basket">
            <button className="shop-layout__basket--closeBtn" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier </h2>

            {cart.length > 0 ?
                <ul>
                    {cart.map(({ name, price, amount }, index) => (
                        <li key={`${name}-index`}> {amount} x {name} - {price}$</li>
                    ))}
                </ul>
                :
                <p>Panier Vide </p>
            }
            <h3>Total: {basketTotal}$</h3>
            <button onClick={() =>
                handleBasket()
            }>Vider le panier </button>
        </div>
    ) : (
        <button className="basket-openBtn" onClick={() => setIsOpen(true)}>Ouvrir le Panier </button>
    )
}