import { useState } from 'react'
import '../styles/Footer.css';
export default function Footer() {
    const [inputValue, setInputValue] = useState("");
    const checkMailCorectness = (value) => {
        if (!value.includes("@")) {
            console.log(value + " ne contient pas @, ceci n'est pas une adresse valide")
        }

    }
    return (
        <footer className="shop-footer">
            <h3>Pour  les pasionnes des plantes </h3>
            <p>Laissez votre mail </p>
            <form action="">
                <input type="text"
                    name="email"
                    id="email"
                    className="shop-footer__input"
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={(e) => checkMailCorectness(e.target.value)}
                    value={inputValue} />
                <button id="submit">Valider </button>
            </form>
        </footer>
    )
}