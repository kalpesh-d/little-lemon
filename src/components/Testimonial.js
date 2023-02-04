import './css/Testimonial.css';
import img1 from '../assets/testimonial/image1.jpg';
import img2 from '../assets/testimonial/image2.jpg';
import img3 from '../assets/testimonial/image3.jpg';
import img4 from '../assets/testimonial/image4.jpg';
import Review from './Review';

function Testimonial() {
    return(
        <section className="testimonial">
            <div className="testimonial-heading">
                <h1>Testimonials</h1>
            </div>
            <div className="reviews">
                <Review img={img1} name='Ajay Sharma'
                    review={`"Great food, excellent service, I will definitely be back."`}/>
                <Review img={img2} name='Jessica Smith'
                    review={`"Outstanding food, exceptional service, highly recommend!"`}/>
                <Review img={img3} name='Rachel Davis'
                    review={`"Fantastic ambiance, delicious menu, must-visit restaurant."`}/>
                <Review img={img4} name='Jessica Smith'
                    review={`"Impressive selection, generous portions, excellent value."`}/>
            </div>
        </section>
    );
}

export default Testimonial;