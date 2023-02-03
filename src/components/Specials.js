import './css/Specials.css';
import greekSalad from '../assets/greeksalad.jpg';
import Bruchetta from '../assets/bruchetta.jpg';
import lemonDessert from '../assets/lemon dessert.jpg'
import Card from './Card';

function Specials() {
    return (
        <section className='specials'>
            <div className='top-content'>
                <h1 className='special-heading'>Specials</h1>
                <button className='btn'>Online Menu</button>
            </div>
            <div className='cards'>
                <Card img={greekSalad} alt='Greek Salad' />
                <Card img={Bruchetta} alt='Bruchetta' />
                <Card img={lemonDessert} alt='Lemon Dessert' />
            </div>
        </section>
    );
}

export default Specials;