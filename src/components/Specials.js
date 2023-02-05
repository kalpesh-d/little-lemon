import './css/Specials.css';
import greekSalad from '../assets/greeksalad.jpg';
import Bruchetta from '../assets/bruchetta.jpg';
import lemonDessert from '../assets/lemon dessert.jpg'
import Card from './Card';

function Specials() {
    return (
        <section className='specials' id='menu'>
            <div className='top-content'>
                <h1 className='special-heading'>Specials</h1>
                <button className='btn btn-m'>Online Menu</button>
            </div>
            <div className='cards'>
                <Card img={greekSalad} name='Greek Salad' price='$ 12.99'
                    description='The famous greek salad of crispy lettuce, peppers, 
                                 olives and our Chicago style feta cheese, garnished with 
                                 crunchy garlic and rosemary croutons. '
                    alt='Greek Salad'/>

                <Card img={Bruchetta} name='Bruchetta' price='$ 5.99'
                    description='Our Bruschetta is made from grilled bread that has been smeared 
                                with garlic and seasoned with salt and olive oil. '
                    alt='Bruchetta'/>

                <Card img={lemonDessert} name='Lemon Dessert' price='$ 5.00'
                    description='This comes straight from grandma’s recipe book, every last 
                                ingredient has been sourced and is as authentic as can be imagined.'
                    alt='Lemon Dessert'/>
            </div>
        </section>
    );
}

export default Specials;