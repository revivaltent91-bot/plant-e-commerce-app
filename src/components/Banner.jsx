import logo  from '../assets/logo.png';
import '../styles/Banner.css';
export default function Banner() {
  const titre = "Le palais des fleurs"
    return (
     <div className="banner">
        <img src={logo} alt="maison de la nature"
         className="banner-logo"/>
        <h1 className="banner-titre">{titre}</h1>
     </div>
    );

}