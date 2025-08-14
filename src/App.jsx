import Benefits from './components/Benefits';
import Courses from './components/Courses';
import FaqSec from './components/FaqSec';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits/>
        <Courses/>
        <Testimonials/>
        <FaqSec/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
