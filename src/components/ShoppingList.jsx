import { plantList } from '../datas/plantList'
import { useState } from 'react'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
export default function ShoppingList({ cart, updateCart, activeCategory, setActiveCategory }) {

    const plantCategory = [...new Set(plantList.map(({ category }) => category))]

    const addToCart = (name, price) => {
        /* 
         *On cherche savoir si la plante ajoute par 
         *l'user figure deja dans la liste des plantes 
         *presente dans notre state  
        */
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            /**
             * Nous recuperons les plantes dont leur nom est different 
             *  de la plante qui est actuellement ajoute au click du bouton de l'utilisateur 
             *  et nous utilisons ces plantes pour constituer notre nouvelle liste 
             *  ================EXPLANATION=====
             * si une plante avait ete ajoute precedemment dans le panier 
             * nous verifions a nouveau si elle n'est pas  presente dans la liste des plantes ajoutes dans le panier 
             * si oui alors nous recreons un nouveau tableau avec les plantes dont le nom ne correspond pas a la plante 
             * actuellement renseigne par l'utilisateur (c-a-d plante en cours d'ajout)
             * 
             * nous recreons une nouvelle instance  de la plante precedemment presente cette fois avec la propriete amount mise a jour 
             * pour eviter de multiplier dans le state les occurences d'une meme plante  
             */
            const carFilteredCurrentPlant = cart.filter((plant) => plant.name != name)
            updateCart([
                ...carFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])

            localStorage.setItem("cart", JSON.stringify(
                [
                    ...carFilteredCurrentPlant,
                    { name, price, amount: currentPlantSaved.amount + 1 }
                ]
            ))
        } else {
            updateCart(
                [...cart, { name, price, amount: 1 }]
            )
            //console.log(cart)
            localStorage.setItem("cart", JSON.stringify([...cart, { name, price, amount: 1 }]))
        }
    }
    return (
        <div>
            <div className="shop-categories">
                <h2>Categories </h2>
                <Categories
                    categories={plantCategory}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory} />
            </div>
            <div className="shop-section">
                <h2> Liste des produits  </h2>
                <ul className="shop">
                    {plantList.map(({ id, name, cover, water, light, category, price }) => (
                        !activeCategory || activeCategory === category ?
                            <div key={id}>
                                <PlantItem
                                    name={name}
                                    cover={cover}
                                    water={water}
                                    light={light}
                                    price={price} />
                                <button onClick={() => addToCart(name, price)}>Ajouter</button>
                            </div>
                            : null))}

                </ul>
            </div>

        </div>
    )
}