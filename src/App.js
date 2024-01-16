import './App.css';
import Menu from './menu.js';
import Home from './home.js';
import About from './about.js';
import Services from './services.js';
import Safety from './safety.js';
import Domestic from './domestic.js';
import Industrial from './industrial.js';
import Civil from './civil.js';
import Social from './social.js';
import Contact from './contact.js';
import Footer from './footer.js';


const App = () =>(
    <section className='container-fluid px-0'>
      <Menu />
      <Home />
      <About />
      <Services />
      <Safety />
      <Social />
      <Domestic />
      <Industrial />
      <Civil />
      <Contact />
      <Footer />
    </section>
  )

export default App;