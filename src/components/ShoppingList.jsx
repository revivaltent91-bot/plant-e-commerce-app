import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
export default function ShoppingList() {
    const plantCategory = [...new Set(plantList.map(({ category }) => category))]
    return (
        <div>
            <div>
                <h2>Categories </h2>
                <ul>
                    {
                        plantCategory.map(category => (
                            <li key={category}>{category}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="shop-section">
                <h2> Liste des produits  </h2>
                <ul className="shop">
                    {plantList.map((plant) => (
                        <li className="shop__product" key={plant.id}>
                            {plant.name}
                            {plant.isBestSale && <span>🔥 </span>}
                            {plant.isSpecialOffer && <span className="product-sales">Solde</span> }
                            </li>
                    ))}

                </ul>
            </div>

        </div>
    )
}