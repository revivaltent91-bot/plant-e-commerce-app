import CareScale from './CareScale'
import '../styles/PlantItem.css'
export default function PlantItem({ id, name, cover, light, water }) {
    return (
        <li key={id} className="shop__product">
            <img className="plant-cover" src={cover} alt={name} />
            <p> {name}</p>
            <CareScale light={light} water={water} />
        </li>
    )
}