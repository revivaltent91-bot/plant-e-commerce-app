import sunSvg from '../assets/sun.svg'
import waterSvg from '../assets/water.svg'
export default function CareScale({ light, water }) {
    return (
        <div>
            <div>

                {[...Array(parseInt(light))].map((_, index) => (
                    < span key={index} > <img src={sunSvg} alt="sun" /> </span>
                ))}
            </div>
            <div>
                {[...Array(parseInt(water))].map((_, index) => (
                    < span key={index} > <img src={waterSvg} alt="water" /> </span>
                ))}
            </div>
        </div >

    )
}