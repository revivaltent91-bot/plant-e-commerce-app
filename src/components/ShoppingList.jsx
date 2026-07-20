import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
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
                        <PlantItem key={plant.id}
                            name={plant.name}
                            cover={plant.cover}
                            water={plant.water}
                            light={plant.light} />
                    ))}

                </ul>
            </div>

        </div>
    )
}