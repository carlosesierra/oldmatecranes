const about = {
  id:'aboutus',
  image:{
    alt: 'Old Mate Cranes & Rigging',
    url: '02.jpg',
    width: 640,
    class: 'mw-90 border-charcoal'
  },
  copy:{
    title: 'About Us',
    copy: <>'Old mates cranes and rigging offer safe and simple solutions for all your lifting needs.<br/><br/>We want to help get what you want lifted, where you want it lifted, when you want it lifted.<br/><br/>We have a small team of good people that want to help you get it done then get on their way.<br/><br/>Old mates offer the comfort of a zero loss hour safety record and a real want to keep that record with good planning, good people and a good attitude.<br/><br/>Old mate offers crane hire, dogman and riggers as well as electrical spotters and traffic control solutions. We are able to work with you on cost efficient transport solutions.<br/><br/>"Old mate survives and thrives on repeat business that is hard won by keeping things safe and simple, ensuring great value for money and smiles all around".'</>
  }
};

const About = () =>  (
    <section className='container-fluid p-0 pt-5 text-bg-light' id={about.id}>
      <div className='container justify-content-md-center py-5'>
      <div className='row px-4 g-0 flex-wrap-reverse animate-bottom'>
        <div className='col-lg-6'>
          <h2>{about.copy.title}</h2>
          {about.copy.copy}
        </div>
        <div className='col-lg-6 pb-3 text-center'>
          <img src={about.image.url} alt={about.image.alt} width={about.image.width} className={about.image.class}/>
        </div>
        </div>
      </div>
    </section>
)

export default About;