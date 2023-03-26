import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <NavbarComponent/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};