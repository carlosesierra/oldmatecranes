import './App.css';
import Menu from './menu.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Services from './services.jsx';
import Safety from './safety.jsx';
import Domestic from './domestic.jsx';
import Industrial from './industrial.jsx';
import Civil from './civil.jsx';
import Social from './social.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';


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