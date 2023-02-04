import './css/Card.css';
import vehicle from '../assets/Group.svg';

function Card ({img, alt, name, description, price}){
    return(
        <div className='card'>
            <div className='card-img'>
                <img src={img} alt={alt}/>
            </div>
            <div className='card-content'>
                <div className='card-heading'>
                    <h1 className='card-name'>{name}</h1>
                    <p className='card-price'>{price}</p>
                </div>
                <p className='card-desc'>{description}</p>
            <div className='delivery'>
                <p className='card-delivery'>Order a delivery</p>
                <img src={vehicle} alt='icon'/>
            </div>
            </div>
        </div>
    );
}

export default Card;