import CareScale from './CareScale'
import '../styles/PlantItem.css'
export default function PlantItem({ id, name, cover, light, water }) {
    return (
        <li key={`${id}-${name}`} className="shop__product">
            <img className="plant-cover" src={cover} alt={`${name} cover`} />
            <p> {name}</p>
            <CareScale careType="light" scaleValue={light}/>
            <CareScale careType="water" scaleValue={water}/>
        </li>
    )
}