import Navigation from './components/Navigation';
import Main from './components/Main';
import Special from './components/Special';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Main>
        <Special/>
        <Testimonial />
        <About />
      </Main>
      <Footer />
    </>
  );
}

export default App;