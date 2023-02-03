import './css/Card.css';

function Card ({img, alt}){
    return(
        <div className='card'>
            <div className='card-img'>
                <img src={img} alt={alt}/>
            </div>
            <div className='card-content'></div>
        </div>
    );
}

export default Card;