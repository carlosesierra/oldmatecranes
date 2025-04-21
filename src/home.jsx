const home = {
  image:{
      alt: 'Old Mate Cranes & Rigging',
      url: 'logo02.png',
      width: 512,
      class: 'mw-90'
  },
  copy:{
    title: <>Old Mate<br/>Cranes & Rigging</>,
    intro: 'Old mates cranes and rigging offer safe and simple solutions for all your lifting needs.'
  }
};

const Home = () =>  (
    <section className='container-fluid p-0 min-vh-100 bg-image'>
    <section className='container-fluid p-0 min-vh-100 d-flex justify-content-center align-items-center bg-gradient-black'>
    <div className='row px-4 g-0 justify-content-center align-items-center '>
      <div className='col-sm-6 text-center animate-bottom'>
        <img src={home.image.url} alt={home.image.alt} width={home.image.width}  className={home.image.class}/>
        <h1>{home.copy.title}</h1>
        <div className='col'>{home.copy.intro}</div>  
      </div>
    </div>
    </section>
    </section>
)

export default Home;
