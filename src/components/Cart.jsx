import { useState } from 'react'
import '../styles/Cart.css'
export default function Cart() {
    const flowerPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const handleState = () => {
        updateCart(0)
    }
    return isOpen ? (
        <div className="shop-layout__basket">
            <button className="shop-layout__basket--closeBtn" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier </h2>
            <div>
                Flower : Eucalyptus {flowerPrice} $
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total: {flowerPrice * cart}$</h3>
            <button onClick={() => handleState()}>Vider le panier </button>
        </div>
    ) : (
        <button className="basket-openBtn" onClick={() => setIsOpen(true)}>Ouvrir le Panier </button>
    )
}