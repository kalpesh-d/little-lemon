import './css/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
    return(
        <section className='hero'>
            <div className='hero-content'>
                <div className='content'>
                    <div className='text'>
                        <h1 className='heading'>Little Lemon</h1>
                        <p className='city'>Chicago</p>
                        <p className='paragraph'>We are a family owned Mediterranean restaurant,
                        <br/>focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <Link to='/reservation'>
                        <button className='btn'>Reserve a Table</button>
                    </Link>
                </div>
                <div className='hero-img'>
                    <img src={require('../assets/restauranfood.jpg')} className='img' alt='Restaurant Food'/>
                </div>
            </div>
        </section>
    );
}

export default Hero;