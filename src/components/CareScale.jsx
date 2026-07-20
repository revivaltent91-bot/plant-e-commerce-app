import sunSvg from '../assets/sun.svg'
import waterSvg from '../assets/water.svg'
export default function CareScale({ careType, scaleValue, onClick }) {
    
    const scaleType = careType === 'light' ? sunSvg : waterSvg

    const handleClick = (e) => {
        console.log(e)
    } 
    return (
        <div>
            <div>
                       {/* /create an array from number */}
                {[...Array(parseInt(scaleValue))].map((_, index) => (
                    < span key={index} onClick={() => handleClick(careType)}> <img src={`${scaleType}`} alt={`${careType} icon`} /> </span>
                ))}
            </div>

            {/* <div>

                {[...Array(parseInt(light))].map((_, index) => (
                    < span key={index} > <img src={sunSvg} alt="sun icon" /> </span>
                ))}
            </div>
            <div>
                {[...Array(parseInt(water))].map((_, index) => (
                    < span key={index} > <img src={waterSvg} alt="water icon" /> </span>
                ))}
            </div> */}
        </div >

    )
}