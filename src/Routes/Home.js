import Navigation from '../components/Navigation';
import Hero from  '../components/Hero';
import Footer from '../components/Footer';
import Specials from '../components/Specials';
import Testimonial from '../components/Testimonial';

function Home() {
    return(
        <>
            <Navigation />
            <Hero />
            <Specials/>
            <Testimonial/>
            <Footer />
        </>
    );
}

export default Home;