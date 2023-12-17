import { Link } from 'react-router-dom';
import './housingCard.css';

import HousingData from '../../assets/housing.json';

function HousingCard() {
    return (
        <section className="HousingCtr">
         {HousingData.map((housing) => (

            <Link to={`/housing/${housing.id}`} key={housing.id} >
               <figure className="Housing__Card">
                  <img className="Housing__Img" src={housing.cover} alt={housing.title}/>
                  <div className="Housing__Gradient"></div>
                  <figcaption className="Housing__Title">{housing.title}</figcaption>
               </figure>
            </Link>

         ))}
      </section>
    )
}

export default HousingCard;

