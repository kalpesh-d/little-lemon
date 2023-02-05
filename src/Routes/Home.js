import Navigation from '../components/Navigation';
import Hero from  '../components/Hero';
import Footer from '../components/Footer';
import Specials from '../components/Specials';
import Testimonial from '../components/Testimonial';
import About from '../components/About';

function Home() {
    return(
        <>
            <Navigation />
            <Hero />
            <Specials/>
            <Testimonial/>
            <About/>
            <Footer />
        </>
    );
}

export default Home;