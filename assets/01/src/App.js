import './App.css';
import Menu from './menu.js';
import Home from './home.js';
import About from './about.js';
import Video from './video.js';
import Contact from './contact.js';

export default function App() {
  return (
    <section className='container-fluid px-0'>
      <Menu />
      <Home />
      <About />
      <Video />
      <Contact />
    </section>
  );
}